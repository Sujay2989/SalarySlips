package com.incedo.telcomanalytics.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.incedo.telcom.entity.TelecomData;
import com.incedo.telcomanalytics.entity.AnalyticsResult;

public interface AnalyticsResultsRepository extends JpaRepository<AnalyticsResult,Long> {

}

public interface TelecomDataRepository extends JpaRepository<TelecomData, Long>{
	
}
