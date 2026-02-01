package com.example.hiragana.services;

import com.example.hiragana.model.Traducoes;
import com.example.hiragana.repository.TraducoesRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class TraducoesService {

    @Autowired
    private TraducoesRepository traducoesRepository;

    public List<Traducoes> getAllTraducoes() {
        return traducoesRepository.findAll();
    }

    public Optional<Traducoes> getTraducoesById(Integer id) {
        return traducoesRepository.findById(id);
    }

    public Traducoes saveTraducoes(Traducoes traducoes) {
        return traducoesRepository.save(traducoes);
    }
}