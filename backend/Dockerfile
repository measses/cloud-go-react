FROM golang:1.22-alpine AS builder

ENV CGO_ENABLED=1
ENV GOOS=linux
ENV GOARCH=amd64

RUN apk add --no-cache gcc musl-dev

WORKDIR /app

COPY go.mod go.sum ./
RUN go mod download

COPY . .
RUN go build -o main .

FROM alpine:latest

WORKDIR /root/
COPY --from=builder /app/main .

EXPOSE 9090

# Uygulama başlat
CMD ["./main", "--port", "9090"]

