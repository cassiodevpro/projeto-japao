package com.example.hiragana.model;


import jakarta.persistence.*;
import java.time.LocalDateTime;

@Entity
@Table(name = "numeros")
public class Numeros {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(nullable = false)
    private Integer numero;

    @Column(nullable = false, length = 20)
    private String kanji;

    @Column(nullable = false, length = 30)
    private String hiragana;

    @Column(nullable = false, length = 30)
    private String katakana;

    @Column(length = 50)
    private String uso;

    @Column(name = "created_at", nullable = false, updatable = false)
    private LocalDateTime createdAt;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Integer getNumero() {
        return numero;
    }

    public void setNumero(Integer numero) {
        this.numero = numero;
    }

    public String getKanji() {
        return kanji;
    }

    public void setKanji(String kanji) {
        this.kanji = kanji;
    }

    public String getHiragana() {
        return hiragana;
    }

    public void setHiragana(String hiragana) {
        this.hiragana = hiragana;
    }

    public String getKatakana() {
        return katakana;
    }

    public void setKatakana(String katakana) {
        this.katakana = katakana;
    }

    public String getUso() {
        return uso;
    }

    public void setUso(String uso) {
        this.uso = uso;
    }

    public LocalDateTime getCreatedAt() {
        return createdAt;
    }

    public void setCreatedAt(LocalDateTime createdAt) {
        this.createdAt = createdAt;
    }

    public Numeros(Integer id, Integer numero, String kanji, String hiragana, String katakana, String uso,
            LocalDateTime createdAt) {
        this.id = id;
        this.numero = numero;
        this.kanji = kanji;
        this.hiragana = hiragana;
        this.katakana = katakana;
        this.uso = uso;
        this.createdAt = createdAt;
    }

    public Numeros() {
    }
}
