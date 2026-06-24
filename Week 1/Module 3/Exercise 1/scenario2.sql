DECLARE
    CURSOR c_customers IS 
        SELECT customer_id, balance FROM customers;
BEGIN
    FOR cust IN c_customers LOOP
        IF cust.balance > 10000 THEN
            UPDATE customers 
            SET IsVIP = 'TRUE' 
            WHERE customer_id = cust.customer_id;
        END IF;
    END LOOP;
    COMMIT;
EXCEPTION
    WHEN OTHERS THEN
        ROLLBACK;
        RAISE;
END;
/
