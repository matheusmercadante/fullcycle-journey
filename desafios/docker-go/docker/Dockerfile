## Multistage Building

# Stage 1
FROM golang AS builder

WORKDIR /app/hello

COPY . .

RUN go get .

RUN CGO_ENABLED=0 GOOS=linux go build -a -installsuffix cgo -o hello .

# Stage 2
FROM scratch
WORKDIR /bin
COPY --from=builder /app/hello .
CMD [ "./hello"]