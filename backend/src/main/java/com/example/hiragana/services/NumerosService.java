package com.example.hiragana.services;

import com.example.hiragana.model.Numeros;
import com.example.hiragana.repository.NumerosRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class NumerosService {

    @Autowired
    private NumerosRepository numerosRepository;

    public List<Numeros> getAllNumeros() {
        return numerosRepository.findAll();
    }

    public Optional<Numeros> getNumerosById(Integer id) {
        return numerosRepository.findById(id);
    }

    public Numeros saveNumeros(Numeros numeros) {
        return numerosRepository.save(numeros);
    }
}