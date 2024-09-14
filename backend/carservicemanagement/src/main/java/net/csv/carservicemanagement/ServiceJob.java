package net.csv.carservicemanagement;

import java.util.Date;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;



@Entity
@Table(name = "serviceDetails")
public class ServiceJob {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long jobCode;

    @Column(name = "jobCreationDate")
    private Date createDate;

    @Column(name = "customerName")
    private String customerName;

    @Column(name = "vehicleNo")
    private String vehicleNo;
    
    @Column(name = "serviceType")
    private int serviceType;

    @Column(name = "jobStatus")
    private String status;

    @Column(name = "expectedFee")
    private float expFee;

    public ServiceJob() {

    }

    public ServiceJob(Date createDate, String customerName, String vehicleNo, int serviceType,
            String status, float expFee) {
        super();
        this.createDate = createDate;
        this.customerName = customerName;
        this.vehicleNo = vehicleNo;
        this.serviceType = serviceType;
        this.status = status;
        this.expFee = expFee;
    }


    public long getJobCode() {
        return jobCode;
    }
    public Date getCreateDate() {
        return createDate;
    }
    public String getCustomerName() {
        return customerName;
    }
    public String getVehicleNo() {
        return vehicleNo;
    }
    public int getServiceType() {
        return serviceType;
    }
    public String getStatus() {
        return status;
    }
    public float getExpFee() {
        return expFee;
    }


    public void setJobCode(long jobCode) {
        this.jobCode = jobCode;
    }
    public void setCreateDate(Date createDate) {
        this.createDate = createDate;
    }
    public void setCustomerName(String customerName) {
        this.customerName = customerName;
    }
    public void setVehicleNo(String vehicleNo) {
        this.vehicleNo = vehicleNo;
    }
    public void setServiceType(int serviceType) {
        this.serviceType = serviceType;
    }
    public void setStatus(String status) {
        this.status = status;
    }
    public void setExpFee(float expFee) {
        this.expFee = expFee;
    }
}
