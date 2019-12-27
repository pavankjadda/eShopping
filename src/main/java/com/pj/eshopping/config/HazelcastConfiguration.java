package com.pj.eshopping.config;

import com.hazelcast.config.Config;
import com.hazelcast.config.EvictionPolicy;
import com.hazelcast.config.GroupConfig;
import com.hazelcast.config.MapConfig;
import com.hazelcast.config.MaxSizeConfig;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class HazelcastConfiguration
{
	@Bean
	public Config hazelcastConfig()
	{
		Config config = new Config();
		config.setInstanceName("hazelcast-instance").addMapConfig(new MapConfig()
				.setName("configuration")
				.setMaxSizeConfig(new MaxSizeConfig(200, MaxSizeConfig.MaxSizePolicy.FREE_HEAP_SIZE))
				.setEvictionPolicy(EvictionPolicy.LRU)
				.setTimeToLiveSeconds(-1));
		config.setGroupConfig(new GroupConfig("dev", "dev-pass"));
		config.getNetworkConfig().setPublicAddress("192.168.1.100");
		config.getNetworkConfig().setPort(5701);
		return config;
	}
}
