package com.example.Assignment1.repositories;


import com.example.Assignment1.models.Topic;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface TopicRepository
        extends CrudRepository<Topic, Integer> {

  @Query("SELECT topic FROM Topic topic")
  List<Topic> findAllTopics();

  @Query("SELECT topic FROM Topic topic WHERE topic.id=:topicId")
  Topic findTopicById(
          @Param("topicId") Integer tid);

  @Query("SELECT topic FROM Topic topic WHERE topic.lessonId = :lessonId")
  List<Topic> findTopicsForLesson(
          @Param("lessonId") String lessonId);

}