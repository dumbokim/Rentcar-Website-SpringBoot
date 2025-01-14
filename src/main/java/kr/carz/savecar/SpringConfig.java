package kr.carz.savecar;

import kr.carz.savecar.repository.*;
import kr.carz.savecar.service.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class SpringConfig {
    private final MonthlyRentRepository monthlyRentRepository;
    private final YearlyRentRepository yearlyRentRepository;
    private final ShortRentRepository shortRentRepository;
    private final CampingCarRepository campingCarRepository;
    private final ReservationRepository reservationRepository;
    private final CampingCarPriceRepository campingCarPriceRepository;
    private final CalendarDateRepository calendarDateRepository;
    private final CalendarTimeRepository calendarTimeRepository;
    private final DateCampingRepository dateCampingRepository;
    private final CampingcarDateTimeRepository2 campingcarDateTimeRepository2;
    private final LoginRepository loginRepository;


    @Autowired
    public SpringConfig(MonthlyRentRepository monthlyRentRepository, YearlyRentRepository yearlyRentRepository,
                        ShortRentRepository shortRentRepository, CampingCarRepository campingCarRepository,
                        ReservationRepository reservationRepository, CampingCarPriceRepository campingCarPriceRepository,
                        CalendarDateRepository calendarDateRepository, CalendarTimeRepository calendarTimeRepository,
                        DateCampingRepository dateCampingRepository, CampingcarDateTimeRepository2 campingcarDateTimeRepository2,
                        LoginRepository loginRepository) {
        this.monthlyRentRepository = monthlyRentRepository;
        this.yearlyRentRepository = yearlyRentRepository;
        this.shortRentRepository = shortRentRepository;
        this.campingCarRepository = campingCarRepository;
        this.reservationRepository = reservationRepository;
        this.campingCarPriceRepository = campingCarPriceRepository;
        this.calendarDateRepository = calendarDateRepository;
        this.calendarTimeRepository = calendarTimeRepository;
        this.dateCampingRepository = dateCampingRepository;
        this.campingcarDateTimeRepository2 = campingcarDateTimeRepository2;
        this.loginRepository = loginRepository;
    }

    @Bean
    public MonthlyRentService monthlyRentService() {
        return new MonthlyRentService(monthlyRentRepository);
    }

    @Bean
    public YearlyRentService yearlyRentService() {
        return new YearlyRentService(yearlyRentRepository);
    }

    @Bean
    public ReservationService reservationService() { return new ReservationService(reservationRepository); }

    @Bean
    public ShortRentService shortRentService() { return new ShortRentService(shortRentRepository); }

    @Bean
    public CampingCarService campingCarService() { return new CampingCarService(campingCarRepository); }

    @Bean
    public CampingCarPriceService campingCarVariableService() { return new CampingCarPriceService(campingCarPriceRepository); }

    @Bean
    public CalendarDateService calendarDateService() { return new CalendarDateService(calendarDateRepository); }

    @Bean
    public CalendarTimeService calendarTimeService() { return new CalendarTimeService(calendarTimeRepository); }

    @Bean
    public DateCampingService dateCampingService() { return new DateCampingService(dateCampingRepository); }

    @Bean
    public CampingcarDateTimeService2 campingcarDateTimeService() { return new CampingcarDateTimeService2(campingcarDateTimeRepository2); }

    @Bean
    public LoginService loginService() { return new LoginService(loginRepository); }




}
