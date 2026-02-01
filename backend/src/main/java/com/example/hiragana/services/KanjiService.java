package com.example.hiragana.services;

import com.example.hiragana.model.Kanji;
import com.example.hiragana.repository.KanjiRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class KanjiService {

    @Autowired
    private KanjiRepository kanjiRepository;

    public List<Kanji> getAllKanji() {
        return kanjiRepository.findAll();
    }

    public Optional<Kanji> getKanjiById(Integer id) {
        return kanjiRepository.findById(id);
    }

    public Kanji saveKanji(Kanji kanji) {
        return kanjiRepository.save(kanji);
    }
}
