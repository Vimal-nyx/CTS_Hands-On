package com.cognizant.ormlearn;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationContext;
import com.cognizant.ormlearn.model.Employee;
import com.cognizant.ormlearn.service.EmployeeService;
import org.hibernate.SessionFactory;
import javax.persistence.EntityManagerFactory;

@SpringBootApplication
public class OrmLearnApplication {
    private static final Logger LOGGER = LoggerFactory.getLogger(OrmLearnApplication.class);

    public static void main(String[] args) {
        ApplicationContext context = SpringApplication.run(OrmLearnApplication.class, args);
        EmployeeService service = context.getBean(EmployeeService.class);
        
        LOGGER.info("Testing Spring Data JPA Save:");
        Employee emp1 = new Employee();
        emp1.setName("John Doe");
        service.addEmployee(emp1);
        LOGGER.info("Saved Employee using JPA Repository: {}", emp1.getId());

        LOGGER.info("Testing Hibernate SessionFactory Save:");
        EntityManagerFactory emf = context.getBean(EntityManagerFactory.class);
        SessionFactory sessionFactory = emf.unwrap(SessionFactory.class);
        HibernateEmployeeDAO dao = new HibernateEmployeeDAO(sessionFactory);
        
        Employee emp2 = new Employee();
        emp2.setName("Jane Smith");
        Integer id = dao.addEmployee(emp2);
        LOGGER.info("Saved Employee using Hibernate SessionFactory: {}", id);
    }
}
