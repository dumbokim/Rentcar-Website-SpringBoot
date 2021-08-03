package kr.carz.savecar.service;

import kr.carz.savecar.domain.CalendarDate;
import kr.carz.savecar.domain.CampingCarPrice;
import kr.carz.savecar.domain.DateCamping;
import kr.carz.savecar.repository.CampingCarPriceRepository;
import kr.carz.savecar.repository.DateCampingRepository;

import java.util.List;

public class DateCampingService {

    private final DateCampingRepository dateCampingRepository;

    public DateCampingService(DateCampingRepository dateCampingRepository) {
        this.dateCampingRepository = dateCampingRepository;
    }

    public List<DateCamping> findDateCampingPrice(){
        return dateCampingRepository.findAll();
    }

    public List<DateCamping> findByDateId(CalendarDate date_id){
        return dateCampingRepository.findByDateId(date_id);
    }

}