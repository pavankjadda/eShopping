package com.pj.eshopping.repo;

import com.pj.eshopping.domain.user.Region;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface RegionRepository extends JpaRepository<Region, Long>
{
	Optional<Region> findByName(String name);
}
