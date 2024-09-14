package net.csv.carservicemanagement;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ServiceJobRepository extends JpaRepository<ServiceJob, Long>{
    
}
