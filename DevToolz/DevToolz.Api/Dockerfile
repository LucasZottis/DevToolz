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
EXPOSE 5000 5001

# # Set the environment variable for the URL to bind
ENV ASPNETCORE_URLS=http://+:5000;https://+:5001

COPY --from=build-env /App/out .
ENTRYPOINT ["dotnet", "DevToolz.Api.dll"]