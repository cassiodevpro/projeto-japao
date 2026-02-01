package com.example.hiragana.repository;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.hiragana.model.Kanji;

@Repository
public interface KanjiRepository extends JpaRepository<Kanji, Integer> {
}