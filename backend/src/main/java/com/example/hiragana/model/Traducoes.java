package com.example.hiragana.model;


import jakarta.persistence.*;
import java.time.LocalDateTime;

@Entity
@Table(name = "traducoes")
public class Traducoes {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Enumerated(EnumType.STRING)
    @Column(name = "tipo_referencia", nullable = false, length = 10)
    private TipoReferencia tipoReferencia;

    @Column(name = "referencia_id", nullable = false)
    private Integer referenciaId;

    @Column(nullable = false, length = 10)
    private String idioma;

    @Column(nullable = false, length = 100)
    private String traducao;

    @Column(columnDefinition = "TEXT")
    private String descricao;

    @Column(name = "created_at", nullable = false, updatable = false)
    private LocalDateTime createdAt;

    public enum TipoReferencia {
        HIRAGANA, KATAKANA, KANJI, NUMERO
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public TipoReferencia getTipoReferencia() {
        return tipoReferencia;
    }

    public void setTipoReferencia(TipoReferencia tipoReferencia) {
        this.tipoReferencia = tipoReferencia;
    }

    public Integer getReferenciaId() {
        return referenciaId;
    }

    public void setReferenciaId(Integer referenciaId) {
        this.referenciaId = referenciaId;
    }

    public String getIdioma() {
        return idioma;
    }

    public void setIdioma(String idioma) {
        this.idioma = idioma;
    }

    public String getTraducao() {
        return traducao;
    }

    public void setTraducao(String traducao) {
        this.traducao = traducao;
    }

    public String getDescricao() {
        return descricao;
    }

    public void setDescricao(String descricao) {
        this.descricao = descricao;
    }

    public LocalDateTime getCreatedAt() {
        return createdAt;
    }

    public void setCreatedAt(LocalDateTime createdAt) {
        this.createdAt = createdAt;
    }

    public Traducoes(Integer id, TipoReferencia tipoReferencia, Integer referenciaId, String idioma, String traducao,
            String descricao, LocalDateTime createdAt) {
        this.id = id;
        this.tipoReferencia = tipoReferencia;
        this.referenciaId = referenciaId;
        this.idioma = idioma;
        this.traducao = traducao;
        this.descricao = descricao;
        this.createdAt = createdAt;
    }

    public Traducoes() {
    }
}
