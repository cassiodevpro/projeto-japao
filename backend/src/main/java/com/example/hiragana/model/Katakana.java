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

    @Column(nullable = false, length = 20)
    private String leitura;

    @Column(nullable = false, length = 20)
    private String grupo;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false, length = 10)
    private Tipo tipo;

    @Column(name = "created_at", nullable = false, updatable = false)
    private LocalDateTime createdAt;

    public enum Tipo {
        BASICO, DAKUTEN, HANDAKUTEN
    }

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

    public String getLeitura() {
        return leitura;
    }

    public void setLeitura(String leitura) {
        this.leitura = leitura;
    }

    public String getGrupo() {
        return grupo;
    }

    public void setGrupo(String grupo) {
        this.grupo = grupo;
    }

    public Tipo getTipo() {
        return tipo;
    }

    public void setTipo(Tipo tipo) {
        this.tipo = tipo;
    }

    public LocalDateTime getCreatedAt() {
        return createdAt;
    }

    public void setCreatedAt(LocalDateTime createdAt) {
        this.createdAt = createdAt;
    }

    public Katakana(Integer id, String caractere, String leitura, String grupo, Tipo tipo, LocalDateTime createdAt) {
        this.id = id;
        this.caractere = caractere;
        this.leitura = leitura;
        this.grupo = grupo;
        this.tipo = tipo;
        this.createdAt = createdAt;
    }

    public Katakana() {
    }
}