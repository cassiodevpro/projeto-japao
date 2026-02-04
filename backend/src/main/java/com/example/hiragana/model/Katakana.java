package com.example.hiragana.model;

import jakarta.persistence.*;
import java.time.LocalDateTime;

@Entity
@Table(name = "katakana")
public class Katakana {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(nullable = false, length = 10)
    private String caractere;

    @Column(nullable = false, length = 10)
    private String romaji;

    @Column(nullable = false, length = 10)
    private String grupo;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false, length = 10)
    private Tipo tipo;

    @Column(name = "created_at", nullable = false, updatable = false, insertable = false, columnDefinition = "TIMESTAMP DEFAULT CURRENT_TIMESTAMP")
    private LocalDateTime createdAt;

    public enum Tipo {
        basico, dakuten, handakuten
    }

    public Katakana() {}

    public Katakana(Integer id, String caractere, String romaji, String grupo, Tipo tipo, LocalDateTime createdAt) {
        this.id = id;
        this.caractere = caractere;
        this.romaji = romaji;
        this.grupo = grupo;
        this.tipo = tipo;
        this.createdAt = createdAt;
    }

    public Integer getId() { return id; }
    public void setId(Integer id) { this.id = id; }

    public String getCaractere() { return caractere; }
    public void setCaractere(String caractere) { this.caractere = caractere; }

    public String getRomaji() { return romaji; }
    public void setRomaji(String romaji) { this.romaji = romaji; }

    public String getGrupo() { return grupo; }
    public void setGrupo(String grupo) { this.grupo = grupo; }

    public Tipo getTipo() { return tipo; }
    public void setTipo(Tipo tipo) { this.tipo = tipo; }

    public LocalDateTime getCreatedAt() { return createdAt; }
    public void setCreatedAt(LocalDateTime createdAt) { this.createdAt = createdAt; }
}
