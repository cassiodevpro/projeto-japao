package com.example.hiragana.controller;

import com.example.hiragana.model.Kanji;
import com.example.hiragana.services.KanjiService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/kanji")
public class KanjiController {

    @Autowired
    private KanjiService kanjiService;

    @GetMapping
    public List<Kanji> getAllKanji() {
        return kanjiService.getAllKanji();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Kanji> getKanjiById(@PathVariable Integer id) {
        Optional<Kanji> kanji = kanjiService.getKanjiById(id);
        return kanji.map(ResponseEntity::ok).orElse(ResponseEntity.notFound().build());
    }

    @PostMapping
    public Kanji createKanji(@RequestBody Kanji kanji) {
        return kanjiService.saveKanji(kanji);
    }
}