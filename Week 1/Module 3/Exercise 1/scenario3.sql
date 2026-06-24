DECLARE
    CURSOR c_due_loans IS
        SELECT l.loan_id, c.customer_name, l.due_date, l.amount
        FROM loans l
        JOIN customers c ON l.customer_id = c.customer_id
        WHERE l.due_date BETWEEN SYSDATE AND SYSDATE + 30;
BEGIN
    FOR loan IN c_due_loans LOOP
        DBMS_OUTPUT.PUT_LINE('Reminder: Customer ' || loan.customer_name || 
                             ' has a loan (ID: ' || loan.loan_id || 
                             ') with a balance of $' || loan.amount || 
                             ' due on ' || TO_CHAR(loan.due_date, 'DD-MON-YYYY') || '.');
    END LOOP;
EXCEPTION
    WHEN OTHERS THEN
        RAISE;
END;
/
