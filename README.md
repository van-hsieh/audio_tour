# audio_tour

- Quick notes
  - CREATE DATABASE audio_tour_db;
  - \c audio_tour_db
  - INSERT INTO attractions (name, city, state, country, audio_source) VALUES ('Fisherman Wharf', 'San Francisco', 'California', 'USA', '/Users/vhsieh/Desktop/Learn/audio_tour/audio_files/test_audio1.mp3');
  - CREATE TABLE attractions (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    city VARCHAR(100),
    state VARCHAR(100),
    country VARCHAR(100),
    audio_source VARCHAR(255)
    );
