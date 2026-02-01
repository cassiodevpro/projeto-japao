package com.example.hiragana.services;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.hiragana.model.Hiragana;
import com.example.hiragana.repository.HiraganaRepository;

import java.util.List;
import java.util.Optional;

@Service
public class HiraganaService {

    @Autowired
    private HiraganaRepository hiraganaRepository;

    public List<Hiragana> getAllHiragana() {
        return hiraganaRepository.findAll();
    }

    public Optional<Hiragana> getHiraganaById(Integer id) {
        return hiraganaRepository.findById(id);
    }

    public Hiragana saveHiragana(Hiragana hiragana) {
        return hiraganaRepository.save(hiragana);
    }
}
