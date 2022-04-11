FROM openjdk:8-jdk-alpine
MAINTAINER georgestrike
VOLUME /tmp
COPY /target/pokedex-0.0.1-SNAPSHOT.jar pokedex-0.0.1.jar
EXPOSE 8080
ENTRYPOINT ["java","-jar","/pokedex-0.0.1.jar"]
