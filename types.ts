import React from 'react';

export interface NavItem {
  label: string;
  href: string;
}

export interface Program {
  title: string;
  description: string;
  icon: string | React.ReactNode;
  color: string;
}

export interface TimelineEvent {
  title: string;
  date: string;
  description: string;
  status: 'past' | 'current' | 'future';
}

export interface CoreValue {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}

export interface GalleryItem {
  image: string;
  title: string;
  category: string;
}

export interface Teacher {
  name: string;
  role: string;
  photo: string;
  bio: string;
}

export interface Testimonial {
  name: string;
  role: string;
  content: string;
  rating: number;
  avatar: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}