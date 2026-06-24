DECLARE
    CURSOR c_customers IS 
        SELECT customer_id, age FROM customers;
BEGIN
    FOR cust IN c_customers LOOP
        IF cust.age > 60 THEN
            UPDATE loans 
            SET interest_rate = interest_rate - 1 
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
