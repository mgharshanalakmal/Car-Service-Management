package net.csv.carservicemanagement;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("api/v1")
public class ServiceJobController {

    @Autowired
    private ServiceJobRepository serviceJobRepository;

    // get all job codes

    @GetMapping("/jobs")
    public List<ServiceJob> getAllJobs() {
        return serviceJobRepository.findAll();
    }

    // create new service entries
    @PostMapping("/jobs")
    public ServiceJob createJob(@RequestBody ServiceJob job) {
        return serviceJobRepository.save(job);
    }

    // get by Id
    @GetMapping("/jobs/{id}")
    public ResponseEntity<ServiceJob> getServiceJobById(@PathVariable long id) {
        ServiceJob serviceJob = serviceJobRepository.findById(id).orElseThrow(()-> new ResourceNotFoundException(id + "Job Code not Exists!!!"));

        return ResponseEntity.ok(serviceJob);
    }

    // update service entries
    @PutMapping("/jobs/{id}")
    public ResponseEntity<ServiceJob> updateServiceJob(@PathVariable Long id, @RequestBody ServiceJob serviceJobDetails) {
        ServiceJob serviceJob = serviceJobRepository.findById(id).orElseThrow(()-> new ResourceNotFoundException(id + "Job Code not Exists!!!"));

        serviceJob.setServiceType(serviceJobDetails.getServiceType());
        serviceJob.setStatus(serviceJobDetails.getStatus());
        serviceJob.setExpFee(serviceJobDetails.getExpFee());

        ServiceJob updatedJob = serviceJobRepository.save(serviceJob);

        return ResponseEntity.ok(updatedJob);
    }

    // delete entry
    @DeleteMapping("/jobs/{id}")
    public ResponseEntity<Map<String, Boolean>> deleteServiceJob(@PathVariable Long id) {
        ServiceJob serviceJob = serviceJobRepository.findById(id).orElseThrow(()-> new ResourceNotFoundException(id + "Job Code not Exists!!!"));

        serviceJobRepository.delete(serviceJob);
        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", Boolean.TRUE);

        return ResponseEntity.ok(response);
    }
}
