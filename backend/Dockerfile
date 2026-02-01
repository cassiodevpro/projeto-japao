FROM eclipse-temurin:17-jdk-alpine

WORKDIR /app

# Copia o JAR compilado
COPY target/*.jar app.jar

# Expõe a porta da aplicação
EXPOSE 8080

# Define o comando de inicialização
ENTRYPOINT ["java", "-jar", "app.jar"]