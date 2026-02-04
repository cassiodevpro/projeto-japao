package com.example.hiragana.model;

import jakarta.persistence.*;
import java.time.LocalDateTime;

@Entity
@Table(name = "numeros")
public class Numeros {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(name = "valor", nullable = false, unique = true)
    private Integer valor;

    @Column(nullable = false, length = 20)
    private String kanji;

    @Column(nullable = false, length = 50)
    private String romaji;

    @Column(name = "created_at", nullable = false, updatable = false)
    private LocalDateTime createdAt;

    @PrePersist
    protected void onCreate() {
        this.createdAt = LocalDateTime.now();
    }

    public Numeros() {}

    public Numeros(Integer id, Integer valor, String kanji, String romaji, LocalDateTime createdAt) {
        this.id = id;
        this.valor = valor;
        this.kanji = kanji;
        this.romaji = romaji;
        this.createdAt = createdAt;
    }

    public Integer getId() { return id; }
    public void setId(Integer id) { this.id = id; }

    public Integer getValor() { return valor; }
    public void setValor(Integer valor) { this.valor = valor; }

    public String getKanji() { return kanji; }
    public void setKanji(String kanji) { this.kanji = kanji; }

    public String getRomaji() { return romaji; }
    public void setRomaji(String romaji) { this.romaji = romaji; }

    public LocalDateTime getCreatedAt() { return createdAt; }
    public void setCreatedAt(LocalDateTime createdAt) { this.createdAt = createdAt; }
}
