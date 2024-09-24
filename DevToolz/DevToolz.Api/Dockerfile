FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build-env
WORKDIR /App

# Copy everything
COPY . ./
# Restore as distinct layers
RUN dotnet restore
# Build and publish a release
RUN dotnet publish -c Release -o out

# Build runtime image
FROM mcr.microsoft.com/dotnet/aspnet:8.0
WORKDIR /App

# # Expose the port
EXPOSE 5000

# # Set the environment variable for the URL to bind
ENV ASPNETCORE_URLS=http://+:5000

COPY --from=build-env /App/out .
ENTRYPOINT ["dotnet", "DevToolz.Api.dll"]

# Build stage
# FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build-env
# WORKDIR /App

# # Copy everything
# COPY . ./

# # Restore as distinct layers
# RUN dotnet restore

# # Build and publish a release
# RUN dotnet publish -c Release -o out

# # Runtime stage
# FROM mcr.microsoft.com/dotnet/aspnet:8.0
# WORKDIR /App

# # Expose the port
# EXPOSE 5000

# # Set the environment variable for the URL to bind
# ENV ASPNETCORE_URLS=http://+:5000

# # Copy the build output from the previous stage
# COPY --from=build-env /App/out .

# # Run the application
# ENTRYPOINT ["dotnet", "DevToolz.Api.dll"]
