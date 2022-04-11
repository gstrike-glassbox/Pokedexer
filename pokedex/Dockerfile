FROM maven:latest AS builder
COPY ./src src/
COPY ./pom.xml pom.xml
RUN mvn clean package

FROM openjdk:8-jdk-alpine
MAINTAINER georgestrike
VOLUME /tmp
COPY --from=builder /target/pokedex-0.0.1-SNAPSHOT.jar pokedex-0.0.1.jar
EXPOSE 8080
ENTRYPOINT ["java","-jar","/pokedex-0.0.1.jar"]
