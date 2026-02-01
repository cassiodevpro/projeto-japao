package com.example.hiragana.repository;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.hiragana.model.Traducoes;

@Repository
public interface TraducoesRepository extends JpaRepository<Traducoes, Integer> {
}