package com.example.Assignment1.services;

import com.example.Assignment1.models.Topic;
import com.example.Assignment1.repositories.TopicRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class TopicService {
  @Autowired
  TopicRepository repository;


  public Topic createTopic(String lid, Topic topic) {
    topic.setLessonId(lid);
    return repository.save(topic);
  }

  public int updateTopic(int tid, Topic topic) {

    Optional<Topic> toUpdate = Optional.ofNullable(repository.findTopicById(tid));
    if (toUpdate.isPresent()) {
      toUpdate.get().setDescription(topic.getDescription());
      toUpdate.get().setTitle(topic.getTitle());
      toUpdate.get().setWidgets(topic.getWidgets());
      repository.save(toUpdate.get());
      return 1;
    }
    return 0;


  }

  public int deleteTopic(int tid) {
    if (repository.findTopicById(tid) == null) {
      return 0;
    }
    try {
      repository.deleteById(tid);
    } catch (Exception e) {
      return 0;
    }
    return 1;
  }

  public List<Topic> findAllTopics() {
    return repository.findAllTopics();
//        return (List<Topic>)repository.findAll();
  }

  public Topic findTopicById(Integer tid) {
    return repository.findTopicById(tid);
//        Optional<Topic> optional = repository.findById(tid);
//        if(optional.isPresent()) {
//            return optional.get();
//        }
//        return null;
  }

  public List<Topic> findTopicsForLesson(String lessonId) {
    return repository.findTopicsForLesson(lessonId);
  }
}