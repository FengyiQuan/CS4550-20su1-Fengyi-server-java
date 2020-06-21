package com.example.Assignment1.repositories;

import com.example.Assignment1.models.Widget;

import org.springframework.data.repository.CrudRepository;


import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface WidgetRepository
        extends CrudRepository<Widget, Integer> {
  @Query("SELECT widget FROM Widget widget WHERE widget.topic.id=:tid")
  List<Widget> findWidgetsForTopic(
          @Param("tid") Integer topicId);

  @Query("SELECT widget FROM Widget widget WHERE widget.id=:wid")
  Widget findWidgetById(
          @Param("wid") Integer widgetId);

  @Query("SELECT widget FROM Widget widget")
  List<Widget> findAllWidgets();
}