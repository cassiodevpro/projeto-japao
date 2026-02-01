package com.example.hiragana.controller;

import com.example.hiragana.model.Numeros;
import com.example.hiragana.services.NumerosService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/numeros")
public class NumerosController {

    @Autowired
    private NumerosService numerosService;

    @GetMapping
    public List<Numeros> getAllNumeros() {
        return numerosService.getAllNumeros();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Numeros> getNumerosById(@PathVariable Integer id) {
        Optional<Numeros> numero = numerosService.getNumerosById(id);
        return numero.map(ResponseEntity::ok).orElse(ResponseEntity.notFound().build());
    }

    @PostMapping
    public Numeros createNumeros(@RequestBody Numeros numeros) {
        return numerosService.saveNumeros(numeros);
    }
}
