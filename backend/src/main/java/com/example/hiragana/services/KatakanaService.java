package com.example.hiragana.services;

import com.example.hiragana.model.Katakana;
import com.example.hiragana.repository.KatakanaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class KatakanaService {

    @Autowired
    private KatakanaRepository katakanaRepository;

    public List<Katakana> getAllKatakana() {
        return katakanaRepository.findAll();
    }

    public Optional<Katakana> getKatakanaById(Integer id) {
        return katakanaRepository.findById(id);
    }

    public Katakana saveKatakana(Katakana katakana) {
        return katakanaRepository.save(katakana);
    }
}