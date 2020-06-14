package com.example.Assignment1.services;

import com.example.Assignment1.models.Widget;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class WidgetService {
  private List<Widget> widgets = new ArrayList<>();

  {
    widgets.add(new Widget(123, "Widget 1", "HEADING"));
    widgets.add(new Widget(234, "Widget 2", "PARAGRAPH"));
    widgets.add(new Widget(345, "Widget 3", "YOUTUBE"));
    widgets.add(new Widget(432, "Widget 4", "IMAGE"));
    widgets.add(new Widget(567, "Widget 5", "PARAGRAPH"));
  }

  public List<Widget> findWidgetsForTopic(Integer tid) {
    List<Widget> result = new ArrayList<>();

    for (Widget w : widgets) {
      if (w.getTopicId().equals(tid)) {
        result.add(w);
      }
    }

    return result;
  }

  public Widget findWidgetById(Integer wid) {
    for (Widget w : widgets) {
      if (w.getId().equals(wid)) {
        return w;
      }
    }
    return null;
  }

  public List<Widget> findAllWidgets() {
    return widgets;
  }

  public int deleteWidget(Integer wid) {
    for (Widget w : widgets) {
      if (w.getId().equals(wid)) {
        widgets.remove(w);
        return 1;
      }
    }
    return 0;
  }

  public Widget createWidget(String tid, Widget newWidget) {
    newWidget.setId(widgets.size() * 20);
    newWidget.setTopicId(Integer.valueOf(tid));
    this.widgets.add(newWidget);
    return newWidget;
  }

  public int updateWidget(Integer widgetId, Widget updatedWidget) {
    for (int i = 0; i < widgets.size(); i++) {
      if (widgets.get(i).getId().equals(widgetId)) {
        updatedWidget.setId(widgetId);
        widgets.set(i, updatedWidget);
        return 1;
      }
    }
    return 0;
  }
}