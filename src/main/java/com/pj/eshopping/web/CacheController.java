package com.pj.eshopping.web;

import com.hazelcast.core.Hazelcast;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/v1/cache")
public class CacheController
{
	private final Logger logger= LoggerFactory.getLogger(getClass());

	@GetMapping("/clear/all")
	public void clearHazelcastCache()
	{
		try
		{
			Hazelcast.getAllHazelcastInstances().clear();
			logger.info("Successfully cleared the HazelCast cache");
		}
		catch (Exception e)
		{
			logger.error("Exception occurred while clearing the cache, message: {}",e.getMessage());
		}
	}
}
