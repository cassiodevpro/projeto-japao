package com.example.hiragana.controller;
import com.example.hiragana.model.Katakana;
import com.example.hiragana.services.KatakanaService;   
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/katakana")
public class KatakanaController {

    @Autowired
    private KatakanaService katakanaService;

    @GetMapping
    public List<Katakana> getAllKatakana() {
        return katakanaService.getAllKatakana();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Katakana> getKatakanaById(@PathVariable Integer id) {
        Optional<Katakana> katakana = katakanaService.getKatakanaById(id);
        return katakana.map(ResponseEntity::ok).orElse(ResponseEntity.notFound().build());
    }

    @PostMapping
    public Katakana createKatakana(@RequestBody Katakana katakana) {
        return katakanaService.saveKatakana(katakana);
    }
}