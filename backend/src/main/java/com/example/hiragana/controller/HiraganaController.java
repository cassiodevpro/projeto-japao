package com.example.hiragana.controller;

import com.example.hiragana.model.Hiragana;
import com.example.hiragana.services.HiraganaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/hiragana") // Caminho base "/api/hiragana"
public class HiraganaController {

    @Autowired
    private HiraganaService hiraganaService;

    @GetMapping
    public List<Hiragana> getAllHiragana() {
        return hiraganaService.getAllHiragana();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Hiragana> getHiraganaById(@PathVariable Integer id) {
        Optional<Hiragana> hiragana = hiraganaService.getHiraganaById(id);
        return hiragana.map(ResponseEntity::ok).orElse(ResponseEntity.notFound().build());
    }

    @PostMapping
    public Hiragana createHiragana(@RequestBody Hiragana hiragana) {
        return hiraganaService.saveHiragana(hiragana);
    }
}