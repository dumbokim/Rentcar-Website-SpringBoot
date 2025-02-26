package kr.carz.savecar.repository;

import kr.carz.savecar.domain.CampingCar;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CampingCarRepository extends JpaRepository<CampingCar, Long> {

    List<CampingCar> findAll();

}
