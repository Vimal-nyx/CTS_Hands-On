CREATE OR REPLACE PROCEDURE TransferFunds (
    p_from_acc IN NUMBER,
    p_to_acc IN NUMBER,
    p_amount IN NUMBER
) IS
    v_balance NUMBER;
BEGIN
    SELECT balance INTO v_balance 
    FROM accounts 
    WHERE account_id = p_from_acc;

    IF v_balance >= p_amount THEN
        UPDATE accounts 
        SET balance = balance - p_amount 
        WHERE account_id = p_from_acc;
        
        UPDATE accounts 
        SET balance = balance + p_amount 
        WHERE account_id = p_to_acc;
        
        COMMIT;
    ELSE
        RAISE_APPLICATION_ERROR(-20001, 'Insufficient balance for transfer.');
    END IF;
EXCEPTION
    WHEN NO_DATA_FOUND THEN
        ROLLBACK;
        RAISE_APPLICATION_ERROR(-20002, 'Source account does not exist.');
    WHEN OTHERS THEN
        ROLLBACK;
        RAISE;
END;
/
