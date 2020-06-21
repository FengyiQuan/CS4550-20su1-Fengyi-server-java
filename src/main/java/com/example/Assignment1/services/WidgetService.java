package com.example.Assignment1.services;

import com.example.Assignment1.models.Topic;
import com.example.Assignment1.models.Widget;
import com.example.Assignment1.repositories.TopicRepository;
import com.example.Assignment1.repositories.WidgetRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class WidgetService {

  @Autowired
  TopicRepository topicRepository;

  @Autowired
  WidgetRepository repository;

  public List<Widget> findWidgetsForTopic(Integer tid) {
    return repository.findWidgetsForTopic(tid);
//        return (List<Widget>)repository.findAll();
//        List<Widget> result = new ArrayList<Widget>();
//
//        for (Widget w: widgets) {
//            if(w.getTopicId().equals(tid)) {
//                result.add(w);
//            }
//        }
//
//        return result;
  }

  public Widget findWidgetById(Integer wid) {
    return repository.findWidgetById(wid);
  }

  public List<Widget> findAllWidgets() {
    return repository.findAllWidgets();
  }

  public int deleteWidget(Integer wid) {
    try {
      repository.deleteById(wid);
    } catch (Exception e) {
      return 0;
    }

    return 1;
//        List<Widget> result = new ArrayList<Widget>();
//        for (Widget w: widgets) {
//            if(!w.getId().equals(wid)) {
//                result.add(w);
//            }
//        }
//        this.widgets = result;
//        return result;
  }

  public Widget createWidget(Integer tid, Widget newWidget) {
    Topic topic = topicRepository.findTopicById(tid);
    newWidget.setTopic(topic);
    return repository.save(newWidget);
//        newWidget.setId(widgets.size() * 20);
//        this.widgets.add(newWidget);
//        return newWidget;
  }

  public int updateWidget(Integer widgetId, Widget updatedWidget) {
    try {
      Widget widget = repository.findWidgetById(widgetId);

      widget.setType(updatedWidget.getType());
      widget.setName(updatedWidget.getName());
      widget.setText(updatedWidget.getText());
      widget.setUrl(updatedWidget.getUrl());
      widget.setValue(updatedWidget.getValue());
      widget.setWidgetOrder(updatedWidget.getWidgetOrder());
      repository.save(widget);
    } catch (Exception e) {
      return 0;
    }
    return 1;
//        for(int i=0; i<widgets.size(); i++) {
//            if(widgets.get(i).getId().equals(widgetId)) {
//                updatedWidget.setId(widgetId);
//                widgets.set(i, updatedWidget);
//                return updatedWidget;
//            }
//        }
//        return null;
  }
}