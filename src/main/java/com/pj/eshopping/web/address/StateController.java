package com.pj.eshopping.web.address;

import com.pj.eshopping.domain.user.State;
import com.pj.eshopping.repo.StateRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping(path = "/api/v1/state")
public class StateController
{
	private StateRepository stateRepository;

	@Autowired
	public StateController(StateRepository stateRepository)
	{
		this.stateRepository = stateRepository;
	}

	@PostMapping(path = "/create")
	public void createState(@RequestBody State state)
	{
		stateRepository.save(state);
	}

	@GetMapping(value = "/list")
	public List<State> getStates()
	{
		return stateRepository.findAll();
	}

	@GetMapping(value = "/find/{id}")
	public Optional<State> getStateById(@PathVariable Long id)
	{
		return stateRepository.findById(id);
	}


	@GetMapping(value = "/find/country/{id}")
	public List<State> getStatesFilterByCountryId(@PathVariable Long id)
	{
		return stateRepository.findAllByCountryIdOrderByNameAsc(id);
	}

}
