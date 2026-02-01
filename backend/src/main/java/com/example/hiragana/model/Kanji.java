package com.example.hiragana.model;


import jakarta.persistence.*;
import java.time.LocalDateTime;

@Entity
@Table(name = "kanji")
public class Kanji {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(nullable = false, length = 10)
    private String caractere;

    @Column(length = 30)
    private String onyomi;

    @Column(length = 30)
    private String kunyomi;

    @Column(nullable = false, length = 100)
    private String significado;

    @Column(name = "nivel_jlpt", length = 5)
    private String nivelJLPT;

    @Column(name = "created_at", nullable = false, updatable = false)
    private LocalDateTime createdAt;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getCaractere() {
        return caractere;
    }

    public void setCaractere(String caractere) {
        this.caractere = caractere;
    }

    public String getOnyomi() {
        return onyomi;
    }

    public void setOnyomi(String onyomi) {
        this.onyomi = onyomi;
    }

    public String getKunyomi() {
        return kunyomi;
    }

    public void setKunyomi(String kunyomi) {
        this.kunyomi = kunyomi;
    }

    public String getSignificado() {
        return significado;
    }

    public void setSignificado(String significado) {
        this.significado = significado;
    }

    public String getNivelJLPT() {
        return nivelJLPT;
    }

    public void setNivelJLPT(String nivelJLPT) {
        this.nivelJLPT = nivelJLPT;
    }

    public LocalDateTime getCreatedAt() {
        return createdAt;
    }

    public void setCreatedAt(LocalDateTime createdAt) {
        this.createdAt = createdAt;
    }

    public Kanji(Integer id, String caractere, String onyomi, String kunyomi, String significado, String nivelJLPT,
            LocalDateTime createdAt) {
        this.id = id;
        this.caractere = caractere;
        this.onyomi = onyomi;
        this.kunyomi = kunyomi;
        this.significado = significado;
        this.nivelJLPT = nivelJLPT;
        this.createdAt = createdAt;
    }

    public Kanji() {
    }
}