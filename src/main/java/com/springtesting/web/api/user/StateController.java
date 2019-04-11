package com.springtesting.web.api.user;

import com.springtesting.model.user.State;
import com.springtesting.repo.StateRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping(path = "/api/v2/state")
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


}
