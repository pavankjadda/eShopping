package com.pj.eshopping.web.address;

import com.pj.eshopping.domain.user.State;
import com.pj.eshopping.repo.StateRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping(path = "/api/v1/state")
public class StateController {
    private final StateRepository repository;

    @Autowired
    public StateController(StateRepository repository) {
        this.repository = repository;
    }

    @PostMapping(path = "/create")
    public void createState(@RequestBody State state) {
        repository.save(state);
    }

    @GetMapping(value = "/list")
    public List<State> getStates() {
        return repository.findAll();
    }

    @GetMapping(value = "/find/{id}")
    public Optional<State> getStateById(@PathVariable Long id) {
        return repository.findById(id);
    }

    @GetMapping(value = "/find/country/{id}")
    public List<State> getStatesFilterByCountryId(@PathVariable Long id) {
        return repository.findAllByCountryIdOrderByNameAsc(id);
    }

}