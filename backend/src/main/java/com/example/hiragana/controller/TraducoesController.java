package com.example.hiragana.controller;

import com.example.hiragana.model.Traducoes;
import com.example.hiragana.services.TraducoesService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/traducoes")
public class TraducoesController {

    @Autowired
    private TraducoesService traducoesService;

    @GetMapping
    public List<Traducoes> getAllTraducoes() {
        return traducoesService.getAllTraducoes();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Traducoes> getTraducoesById(@PathVariable Integer id) {
        Optional<Traducoes> traducao = traducoesService.getTraducoesById(id);
        return traducao.map(ResponseEntity::ok).orElse(ResponseEntity.notFound().build());
    }

    @PostMapping
    public Traducoes createTraducoes(@RequestBody Traducoes traducoes) {
        return traducoesService.saveTraducoes(traducoes);
    }
}