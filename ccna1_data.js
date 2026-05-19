window.ccnaDatabase = window.ccnaDatabase || {};
window.ccnaDatabase.ccna1 = [
        {
            question: "Un utente lancia il comando 'ping 192.168.1.1' e riceve una risposta. Quale livello del modello OSI ha verificato la corretta connettività end-to-end?",
            options: ["Livello Fisico", "Livello di Rete (Layer 3)", "Livello di Sessione", "Livello di Applicazione"],
            correct: 1,
            rationale: "Il comando ping utilizza i messaggi ICMP Echo che operano al livello di Rete (Layer 3) del modello OSI."
        },
        {
            question: "Quali sono i due componenti fondamentali di un indirizzo IPv4?",
            options: ["Porzione di rete e porzione di host", "Porzione subnet e porzione di broadcast", "Porzione logica e porzione fisica", "Indirizzo unicast e indirizzo multicast"],
            correct: 0,
            rationale: "Un indirizzo IPv4 è sempre strutturato in una parte che identifica la rete (Network ID) e una che identifica il dispositivo (Host ID)."
        },
        {
            question: "Quale servizio si occupa di tradurre un nome di dominio (es. www.cisco.com) in un indirizzo IP numerico?",
            options: ["DHCP", "FTP", "DNS", "HTTP"],
            correct: 2,
            rationale: "Il DNS (Domain Name System) mappa i nomi leggibili dagli umani negli indirizzi IP usati dai router per l'instradamento."
        },
        {
            question: "Quale caratteristica descrive il protocollo TCP a differenza del protocollo UDP?",
            options: ["È connectionless e non garantisce la consegna dei dati.", "È orientato alla connessione (connection-oriented) e garantisce la consegna.", "Ha un overhead molto basso e non usa sistemi di sequenziamento.", "Lavora esclusivamente al livello di Accesso alla Rete."],
            correct: 1,
            rationale: "TCP esegue il 3-way handshake per stabilire una connessione sicura e traccia ogni pacchetto tramite numeri di sequenza per garantirne la consegna."
        },
        {
            question: "Quale subnet mask corrisponde alla notazione CIDR /27?",
            options: ["255.255.255.0", "255.255.255.128", "255.255.255.192", "255.255.255.224"],
            correct: 3,
            rationale: "Una maschera /27 ha 27 bit impostati a 1. Nell'ultimo ottetto abbiamo 3 bit di rete accesi (128+64+32 = 224), ottenendo 255.255.255.224."
        },
        {
            question: "Quale indirizzo IPv4 è un esempio di indirizzo IP privato appartenente alla Classe B?",
            options: ["10.0.0.5", "172.16.5.2", "192.168.1.100", "224.0.0.5"],
            correct: 1,
            rationale: "Il range privato di Classe B va da 172.16.0.0 a 172.31.255.255. (10.x è Classe A, 192.168.x è Classe C)."
        },
        {
            question: "Cosa si intende per 'incapsulamento' dei dati nel networking?",
            options: ["Il processo di compressione dei dati prima dell'invio.", "L'aggiunta di informazioni di controllo (header e trailer) ai dati man mano che scendono lungo lo stack OSI.", "La cifratura dei dati tramite algoritmi come IPsec.", "La conversione dei bit in segnali elettrici o ottici."],
            correct: 1,
            rationale: "Scendendo i livelli OSI, ogni layer avvolge la PDU del livello superiore aggiungendo la propria intestazione (header)."
        },
        {
            question: "Un utente sta scaricando un file tramite FTP. Quale protocollo del livello di trasporto assicura che tutti i segmenti arrivino a destinazione?",
            options: ["UDP", "TCP", "IP", "TFTP"],
            correct: 1,
            rationale: "Il protocollo TCP garantisce l'affidabilità del trasporto dei dati tramite il sequenziamento dei segmenti e i messaggi di acknowledge (ACK)."
        },
        {
            question: "Quale indirizzo IPv4 rappresenta l'indirizzo di broadcast globale utilizzato per inviare un pacchetto a tutti i nodi della rete locale corrente?",
            options: ["0.0.0.0", "127.0.0.1", "255.255.255.255", "192.168.1.255"],
            correct: 2,
            rationale: "L'indirizzo 255.255.255.255 rappresenta il limited broadcast a livello Layer 3, limitato al segmento di rete locale."
        },
        {
            question: "Un tecnico deve configurare un indirizzo IP su uno switch Cisco Catalyst per consentire la gestione remota tramite SSH. Su quale interfaccia deve essere applicato?",
            options: ["Sull'interfaccia fisica FastEthernet 0/1", "Sulla console (line con 0)", "Sull'interfaccia virtuale dello switch (SVI, es. interface vlan 1)", "Sull'interfaccia di loopback del processore"],
            correct: 2,
            rationale: "Gli switch Layer 2 non associano indirizzi IP alle porte fisiche. La connettività di gestione si ottiene configurando l'IP su una SVI (Switch Virtual Interface)."
        },
        {
            question: "Quale parametro viene utilizzato da un host sorgente per determinare se l'indirizzo IP di destinazione si trova nella propria sottorete o in una rete remota?",
            options: ["L'indirizzo del Gateway di default", "La Subnet Mask", "L'indirizzo MAC memorizzato nella tabella CAM", "Il record DNS memorizzato nella cache"],
            correct: 1,
            rationale: "L'host esegue un'operazione logica AND tra il proprio indirizzo IP e la subnet mask per confrontare la network ID con quella della destinazione."
        },
        {
            question: "Quale caratteristica del protocollo IPv6 rappresenta un miglioramento significativo rispetto a IPv4 per quanto riguarda la gestione dell'header?",
            options: ["Un header di dimensioni variabili per supportare più opzioni.", "Un header semplificato con un formato fisso a 40 byte che velocizza l'elaborazione dei router.", "L'eliminazione totale dei campi dedicati alla sicurezza del payload.", "La dipendenza obbligatoria dai server NAT per l'instradamento globale."],
            correct: 1,
            rationale: "A differenza di IPv4, IPv6 ha un header a dimensione fissa (40 byte). Questo permette ai router di elaborare i pacchetti a livello hardware in modo efficiente."
        },
        {
            question: "Quale tipo di memoria all'interno di un router Cisco contiene l'immagine del sistema operativo Cisco IOS, consentendone il caricamento all'avvio?",
            options: ["RAM", "NVRAM", "ROM", "Memoria Flash"],
            correct: 3,
            rationale: "Il file del sistema operativo Cisco IOS viene memorizzato in modo non volatile all'interno della memoria Flash."
        },
        {
            question: "Quale indirizzo IPv6 rappresenta il link-local di loopback utilizzato da un host per inviare pacchetti a se stesso?",
            options: ["fe80::1", "::1", "ff02::1", "2001:db8::1"],
            correct: 1,
            rationale: "L'indirizzo IPv6 di loopback è espresso sinteticamente come ::1 (equivalente al 127.0.0.1 dell'IPv4)."
        },
        {
            question: "Che tipo di messaggio ICMPv6 viene inviato da un dispositivo per richiedere dinamicamente informazioni sul prefisso di rete a un router locale?",
            options: ["Messaggio RS (Router Solicitation)", "Messaggio RA (Router Advertisement)", "Messaggio NS (Neighbor Solicitation)", "Messaggio NA (Neighbor Advertisement)"],
            correct: 0,
            rationale: "I client inviano messaggi RS (Router Solicitation) per forzare i router a rispondere con un pacchetto RA contenente i parametri di autoconfigurazione SLAAC."
        },
        {
            question: "Quale livello del modello di riferimento TCP/IP si occupa dell'indirizzamento logico e dell'instradamento dei pacchetti attraverso reti multiple?",
            options: ["Accesso alla rete", "Internet", "Trasporto", "Applicazione"],
            correct: 1,
            rationale: "Il livello Internet del modello TCP/IP (corrispondente al Layer 3 Network del modello OSI) gestisce l'indirizzamento IP e il routing."
        },
        {
            question: "Un amministratore deve suddividere la rete 192.168.10.0/24 in sottoreti che ospitino un maximum di 30 host ciascuna. Quale subnet mask soddisfa questo requisito riducendo al minimo lo spreco di indirizzi?",
            options: ["255.255.255.128", "255.255.255.192", "255.255.255.224", "255.255.255.240"],
            correct: 2,
            rationale: "Con 5 bit per gli host ($2^5 - 2 = 30$), avanzano 3 bit per la rete nell'ultimo ottetto ($128+64+32 = 224$), ovvero una /27 (255.255.255.224)."
        },
        {
            question: "Quale servizio assegna automaticamente indirizzi IP, subnet mask, gateway predefinito e server DNS agli host?",
            options: ["HTTP", "DHCP", "FTP", "SSH"],
            correct: 1,
            rationale: "Il protocollo DHCP (Dynamic Host Configuration Protocol) automatizza l'assegnazione di tutti i parametri di rete IP agli host."
        },
        {
            question: "Quale indirizzo è un esempio di indirizzo IPv6 global unicast instradabile pubblicamente su Internet?",
            options: ["fe80::260:3eff:fe11:6770", "2001:db8:acad:1::1", "fc00:22bb:4a73::1", "ff02::1"],
            correct: 1,
            rationale: "Gli indirizzi Global Unicast (GUA) in IPv6 corrispondono agli IP pubblici e iniziano attualmente con il macro-prefisso 2000::/3."
        },
        {
            question: "Quali sono i tre livelli che compongono il modello architetturale Cisco a tre strati per la progettazione delle reti LAN?",
            options: ["Access, Distribution, Core", "Physical, Data Link, Network", "Application, Transport, Internet", "Core, Edge, DMZ"],
            correct: 0,
            rationale: "Il modello gerarchico Cisco prevede il livello di Accesso (collegamento host), Distribuzione (routing e policy) e Core (backbone ad altissima velocità)."
        },
        {
            question: "In quale scenario viene utilizzato un cavo Ethernet di tipo Straight-Through (dritto)?",
            options: ["Per connettere uno switch a un altro switch.", "Per connettere un PC direttamente a un altro PC.", "Per connettere uno switch a un router.", "Per connettere un router direttamente a un altro router."],
            correct: 2,
            rationale: "I cavi dritti si usano per connettere dispositivi che lavorano a livelli OSI differenti (Switch è Layer 2, Router è Layer 3)."
        },
        {
            question: "Quale proprietà del livello di trasporto (Layer 4) permette a un singolo PC di gestire contemporaneamente sessioni web, chat e streaming audio senza che i dati si sovrappongano?",
            options: ["L'indirizzamento IP sorgente", "I numeri di porta (Port Numbers) logici", "La codifica dei bit a livello fisico", "Il controllo di ridondanza ciclico (CRC)"],
            correct: 1,
            rationale: "L'uso dei numeri di porta sorgente e destinazione (Layer 4) permette il multiplexing, differenziando i vari flussi di traffico sullo stesso host."
        },
        {
            question: "Quale comando permette a un amministratore di rete di visualizzare la tabella ARP su un router Cisco per verificare le associazioni IP-to-MAC?",
            options: ["show ip route", "show arp", "show mac address-table", "show interfaces"],
            correct: 1,
            rationale: "Il comando 'show arp' mostra la tabella ARP del router (Layer 3). Nota bene: 'show mac address-table' si usa invece sugli switch (Layer 2)."
        },
        {
            question: "Quale PDU (Protocol Data Unit) corrisponde al Livello 2 (Data Link) del modello OSI?",
            options: ["Pacchetto (Packet)", "Segmento (Segment)", "Frame (Trame)", "Bit"],
            correct: 2,
            rationale: "La sequenza delle PDU dall'alto verso il basso è: Dati (L5-7), Segmento (L4), Pacchetto (L3), Frame (L2), Bit (L1)."
        },
        {
            question: "Quale protocollo viene utilizzato per inviare in modo sicuro comandi di configurazione a un apparato di rete tramite una sessione cifrata?",
            options: ["Telnet", "SSH", "HTTP", "TFTP"],
            correct: 1,
            rationale: "SSH (Secure Shell) fornisce una sessione di gestione remota sicura e crittografata, sostituendo il vecchio Telnet che trasmetteva in chiaro."
        },
        {
            question: "Quale indirizzo MAC corrisponde alla destinazione di un frame di broadcast Layer 2?",
            options: ["00-00-00-00-00-00", "FF-FF-FF-FF-FF-FF", "127.0.0.1", "255.255.255.255"],
            correct: 1,
            rationale: "Un broadcast a livello Data Link (Layer 2) è indirizzato a un MAC composto da tutti i bit impostati a 1, ossia FF-FF-FF-FF-FF-FF."
        },
        {
            question: "Quale metodo di commutazione (switching) prevede che lo switch riceva l'intero frame e ne verifichi l'integrità tramite il CRC prima di inoltrarlo?",
            options: ["Cut-through", "Store-and-forward", "Fragment-free", "Fast-forward"],
            correct: 1,
            rationale: "Lo Store-and-forward offre il massimo controllo degli errori perché immagazzina l'intero frame, calcola il CRC e, se corrotto, lo scarta prima dell'invio."
        },
        {
            question: "Quale tipo di fibra ottica utilizza un laser come sorgente luminosa ed è indicata per coprire distanze chilometriche grazie al ridotto diametro del nucleo?",
            options: ["Fibra Multimodale (MMF)", "Fibra Monomodale (SMF)", "Cavo UTP Cat6e", "Cavo coassiale Broadband"],
            correct: 1,
            rationale: "La fibra monomodale (Single-Mode Fiber) ha un nucleo piccolissimo, usa il laser e riduce quasi a zero la dispersione, coprendo tratte lunghissime."
        },
        {
            question: "Quale subnet mask permette di ottenere esattamente 510 host validi per sottorete?",
            options: ["255.255.255.0", "255.255.254.0", "255.255.252.0", "255.255.248.0"],
            correct: 1,
            rationale: "La maschera 255.255.254.0 corrisponde a una /23. Ha 9 bit per gli host: $2^9 - 2 = 512 - 2 = 510$ host utili."
        },
        {
            question: "Nel modello TCP/IP, a quale livello appartengono i protocolli HTTP, HTTPS, SMTP e DNS?",
            options: ["Livello Internet", "Livello di Trasporto", "Livello di Applicazione", "Livello di Accesso alla rete"],
            correct: 2,
            rationale: "I servizi visibili all'utente finale e i relativi protocolli di alto livello operano tutti nel livello di Applicazione."
        },
        {
            question: "Quale valore numerico nell'header IPv4 viene decrementato di 1 da ogni router per prevenire che un pacchetto giri all'infinito a causa di un loop di routing?",
            options: ["Differentiated Services (DiffServ)", "Time to Live (TTL)", "Header Checksum", "Protocol ID"],
            correct: 1,
            rationale: "Il campo TTL (Time to Live) determina la durata del pacchetto. Se un router riceve un pacchetto con TTL pari a 1, lo decrementa a 0, lo scarta e manda un ICMP Time Exceeded."
        },
        {
            question: "Quale organizzazione internazionale si occupa della standardizzazione delle tecnologie e dei protocolli di rete wireless e cablati, come l'802.3 (Ethernet) e l'802.11 (Wi-Fi)?",
            options: ["IANA", "IETF", "IEEE", "ICANN"],
            correct: 2,
            rationale: "L'IEEE (Institute of Electrical and Electronics Engineers) gestisce gli standard della famiglia 802 per i livelli fisico e data link."
        },
        {
            question: "Cosa succede se la configurazione del registro di configurazione (config-register) su un router Cisco viene modificata in 0x2142?",
            options: ["Il router cancella permanentemente il sistema operativo IOS dalla Flash.", "Il router si avvia ignorando il file di startup-config memorizzato nella NVRAM.", "La velocità della porta console viene forzata a 115200 bps.", "Il router disattiva tutte le interfacce per sicurezza."],
            correct: 1,
            rationale: "Il valore di boot 0x2142 dice al router di ignorare la startup-config all'avvio, procedura fondamentale per il password recovery dei dispositivi Cisco."
        },
        {
            question: "Quale combinazione di tasti consente di interrompere un comando IOS in esecuzione sul terminale Cisco, come ad esempio un ping prolungato o una ricerca DNS fallita?",
            options: ["Ctrl-C", "Ctrl-Shift-6", "Ctrl-Z", "Esc-Esc"],
            correct: 1,
            rationale: "La sequenza Ctrl-Shift-6 invia un segnale di escape globale al sistema operativo Cisco IOS per forzare l'arresto del processo corrente."
        },
        {
            question: "Quale protocollo viene utilizzato a livello Layer 2 per evitare la formazione di loop fisici all'interno di una topologia di switch ridondati?",
            options: ["OSPF", "STP (Spanning Tree Protocol)", "ARP", "VTP"],
            correct: 1,
            rationale: "STP identifica i collegamenti ridondanti e disattiva logicamente le porte di backup per impedire tempeste di broadcast e instabilità della tabella MAC."
        },
        {
            question: "Quale indirizzo IPv4 rappresenta un indirizzo multicast riservato per raggiungere tutti i router OSPFv2 all'interno di un segmento?",
            options: ["224.0.0.1", "224.0.0.2", "224.0.0.5", "224.0.0.9"],
            correct: 2,
            rationale: "L'indirizzo multicast 224.0.0.5 è utilizzato dal protocollo di routing dinamico OSPFv2 per inviare gli aggiornamenti di stato a tutti i router associati."
        },
        {
            question: "Quale tipo di attacco informatico consiste nel camuffare la propria identità alterando l'indirizzo IP sorgente dei pacchetti inviati per bypassare i controlli dei firewall?",
            options: ["IP Spoofing", "Phishing", "DDoS", "Buffer Overflow"],
            correct: 0,
            rationale: "L'IP Spoofing consiste nella falsificazione dell'indirizzo IP del mittente per far sembrare il pacchetto proveniente da una sorgente fidata."
        },
        {
            question: "Qual è il prefisso standard assegnato a livello globale per identificare gli indirizzi IPv6 di tipo Unique Local (ULA)?",
            options: ["fe80::/10", "2001::/3", "fc00::/7", "ff00::/8"],
            correct: 2,
            rationale: "Gli indirizzi Unique Local (ULA) usano il prefisso fc00::/7 (spesso configurati come fd00::) e fungono da IP privati per le organizzazioni."
        },
        {
            question: "Durante l'invio di un pacchetto verso una rete remota, cosa accade agli indirizzi di header quando il flusso attraversa un router?",
            options: ["L'indirizzo IP sorgente cambia a ogni hop, mentre il MAC resta identico.", "Sia l'indirizzo IP che il MAC di destinazione cambiano a ogni hop.", "L'indirizzo IP di destinazione resta immutato, mentre gli indirizzi MAC di sorgente e destinazione vengono riscritti a ogni hop.", "Il router non modifica alcun header."],
            correct: 2,
            rationale: "Gli indirizzi IP logici (Layer 3) rimangono fissi dall'host sorgente all'host di destinazione, mentre gli indirizzi MAC (Layer 2) cambiano a ogni hop per adattarsi al nuovo mezzo fisico."
        },
        {
            question: "Quale comando permette di visualizzare lo stato operativo attuale, la velocità e i contatori di errore hardware per una specifica porta di un router Cisco?",
            options: ["show ip interface brief", "show version", "show interfaces", "show startup-config"],
            correct: 2,
            rationale: "Il comando 'show interfaces' mostra i dettagli tecnici estesi, inclusi gli errori di input/output, i pacchetti scartati e i dettagli del Layer 1 e Layer 2."
        },
        {
            question: "Qual è la funzione principale del campo Window Size (Dimensione della finestra) all'interno dell'header di un segmento TCP?",
            options: ["Definire la porta di destinazione dell'applicazione.", "Implementare il controllo del flusso stabilendo quanti dati il destinatario può accettare prima di inviare un ACK.", "Crittografare il contenuto del payload.", "Indicare la lunghezza totale del pacchetto IP."],
            correct: 1,
            rationale: "Il meccanismo della finestra scorrevole (sliding window) controlla il flusso dei dati per evitare che il mittente saturi il buffer di ricezione del destinatario."
        },
        {
            question: "Quale combinazione di comandi permette di assegnare un nome host a un dispositivo Cisco entrando in modalità di configurazione globale?",
            options: ["Router# name R1", "Router(config)# hostname R1", "Router(config-if)# hostname R1", "Router> set name R1"],
            correct: 1,
            rationale: "Il comando per definire il nome del dispositivo è 'hostname nome_apparato' e deve essere inserito esclusivamente in modalità di configurazione globale (config)."
        },
        {
            question: "Quale subnet mask è necessaria per isolare una rete punto-punto tra due router riducendo al massimo gli indirizzi sprecati?",
            options: ["255.255.255.248", "255.255.255.252", "255.255.255.254", "255.255.255.255"],
            correct: 1,
            rationale: "Una maschera /30 (255.255.255.252) fornisce 4 indirizzi totali: 1 ID di rete, 1 di broadcast e 2 indirizzi IP utilizzabili, perfetti per i link seriali o punto-punto tra router."
        },
        {
            question: "In quale sottolivello del Layer 2 (Data Link) del modello OSI operano i protocolli responsabili del controllo degli accessi al mezzo fisico e dell'indirizzamento hardware?",
            options: ["LLC (Logical Link Control)", "MAC (Media Access Control)", "Network Layer", "Network Interface Card (NIC)"],
            correct: 1,
            rationale: "Il livello Data Link è diviso in due: LLC (interfaccia con lo strato superiore) e MAC (gestione fisica degli accessi al mezzo e indirizzi hardware)."
        },
        {
            question: "Quale tipo di memoria all'interno di un dispositivo Cisco perde completamente le informazioni salvate al suo interno in caso di blackout o riavvio?",
            options: ["ROM", "Flash", "RAM", "NVRAM"],
            correct: 2,
            rationale: "La RAM è una memoria volatile. Contiene la running-config e le tabelle dinamiche (routing, ARP, MAC) che si cancellano allo spegnimento."
        },
        {
            question: "Quale comando permette di configurare un messaggio testuale di avviso legale (banner) visualizzato dagli utenti prima di effettuare il login su un dispositivo Cisco?",
            options: ["banner motd # messaggio #", "show banner", "message day # messaggio #", "line console 0 message #"],
            correct: 0,
            rationale: "Il comando 'banner motd' (Message of the Day) seguito da un carattere delimitatore definisce il testo visualizzato all'accesso dell'apparato."
        },
        {
            question: "Quale protocollo applicativo mappa gli indirizzi IPv6 locali negli indirizzi MAC corrispondenti della LAN, sostituendo il vecchio protocollo ARP?",
            options: ["ICMPv6 Neighbor Discovery (ND)", "DHCPv6", "DNSv6", "SLAAC"],
            correct: 0,
            rationale: "IPv6 non usa più i broadcast ARP. La risoluzione degli indirizzi viene effettuata tramite i messaggi ICMPv6 Neighbor Solicitation e Neighbor Advertisement del protocollo ND."
        },
        {
            question: "Quale tecnologia permette di alimentare un dispositivo di rete (es. una telecamera IP o un Access Point) direttamente tramite il cavo in rame Ethernet?",
            options: ["MDIX automatico", "PoE (Power over Ethernet)", "CSMA/CD", "Fiber Channel"],
            correct: 1,
            rationale: "PoE inserisce una corrente continua sui fili del cavo UTP per alimentare gli apparati di rete periferici senza bisogno di alimentatori esterni."
        },
        {
            question: "Quale porzione di un indirizzo IPv6 Global Unicast viene tipicamente assegnata e gestita dall'amministratore di rete aziendale per creare le proprie sottoreti interne?",
            options: ["Global Routing Prefix", "Subnet ID", "Interface ID", "Link-Local ID"],
            correct: 1,
            rationale: "Un indirizzo GUA standard ha un prefisso di routing /48, seguito da un campo Subnet ID di 16 bit gestito dall'azienda, e 64 bit di Interface ID."
        },
        {
            question: "Quale comando consente di cifrare tutte le password salvate in chiaro all'interno della configurazione corrente di un router Cisco?",
            options: ["enable secret password", "service password-encryption", "crypto key generate rsa", "ip ssh version 2"],
            correct: 1,
            rationale: "Il comando globale 'service password-encryption' applica una cifratura debole (Type 7) a tutte le password presenti in chiaro nella running-config."
        },
// --- CCNA 1: BLOCCO 2 DI 3 (DOMANDE 51-100) ---
        {
            question: "Quale stringa descrive correttamente la funzione del comando 'service password-encryption'?",
            options: [
                "Cifra le password inserite usando l'algoritmo MD5 ad alta sicurezza.",
                "Applica una cifratura Type 7 a tutte le password presenti e future nella running-config.",
                "Cifra tutto il traffico che attraversa le porte dello switch.",
                "Abilita la crittografia SSH sulle linee VTY automaticamente."
            ],
            correct: 1,
            rationale: "Il comando 'service password-encryption' applica una cifratura debole di tipo 7 a tutte le password non protette per evitare che vengano lette da sguardi indiscreti sulla running-config."
        },
        {
            question: "Un host sta inviando un frame a un altro host all'interno della stessa rete locale LAN. Quale indirizzo viene utilizzato dallo switch per decidere su quale porta fisica inoltrare il frame?",
            options: [
                "L'indirizzo IP di destinazione",
                "L'indirizzo MAC di destinazione",
                "L'indirizzo IP sorgente",
                "L'indirizzo MAC sorgente"
            ],
            correct: 1,
            rationale: "Gli switch operano al Layer 2 e prendono le decisioni di inoltro basandosi esclusivamente sull'indirizzo MAC di destinazione contenuto nell'header Ethernet."
        },
        {
            question: "Che cosa succede se un router riceve un pacchetto con un valore TTL (Time to Live) pari a 0?",
            options: [
                "Il router azzera la metrica e lo invia al gateway di default.",
                "Il router scarta il pacchetto e invia un messaggio ICMP 'Time Exceeded' alla sorgente.",
                "Il router memorizza il pacchetto nella NVRAM.",
                "Il router inoltra il pacchetto in broadcast sulla rete."
            ],
            correct: 1,
            rationale: "Quando il TTL scende a 0, il pacchetto viene scartato per prevenire loop infiniti, e il router notifica l'host sorgente con un messaggio ICMP di tipo 11."
        },
        {
            question: "Quale combinazione di comandi permette di bloccare l'accesso non autorizzato alla modalità EXEC privilegiata inserendo una password cifrata forte?",
            options: [
                "Router(config)# line console 0\nRouter(config-line)# password cisco",
                "Router(config)# enable secret class",
                "Router(config)# enable password class",
                "Router# copy running-config startup-config"
            ],
            correct: 1,
            rationale: "Il comando 'enable secret' utilizza una cifratura forte (MD5/SHA) per proteggere l'accesso alla modalità privilegiata, superando il vecchio comando 'enable password'."
        },
        {
            question: "Quale tipologia di cavo in rame viene intrecciata per eliminare o ridurre l'effetto del crosstalk (interferenza tra coppie di fili adiacenti)?",
            options: [
                "Cavo Coassiale",
                "Cavo UTP (Unshielded Twisted Pair)",
                "Cavo Twinaxial",
                "Cavo in Fibra Ottica"
            ],
            correct: 1,
            rationale: "I cavi a coppie intrecciate (Twisted Pair) sfruttano la cancellazione dei campi magnetici ruotando i fili a coppie per minimizzare le interferenze elettromagnetiche esterne e interne."
        },
        {
            question: "Quale porta logica di default viene utilizzata dal protocollo sicuro SSH per stabilire una connessione di gestione remota?",
            options: [
                "Porta TCP 21",
                "Porta TCP 22",
                "Porta TCP 23",
                "Porta UDP 67"
            ],
            correct: 1,
            rationale: "SSH risiede di default sulla porta TCP 22, mentre Telnet usa la porta 23 e FTP la porta 21."
        },
        {
            question: "Quale campo dell'header Ethernet viene utilizzato per verificare l'eventuale presenza di errori di trasmissione nel frame tramite il calcolo del CRC?",
            options: [
                "Preamble",
                "Type / Length",
                "FCS (Frame Check Sequence)",
                "Destination MAC"
            ],
            correct: 2,
            rationale: "Il campo FCS, posizionato nel trailer del frame Layer 2, contiene il valore risultante dal Cyclic Redundancy Check (CRC) per convalidare l'integrità dei dati."
        },
        {
            question: "Qual è la funzione principale del protocollo ARP (Address Resolution Protocol)?",
            options: [
                "Tradurre un nome host in un indirizzo IP.",
                "Assegnare dinamicamente parametri di rete agli host.",
                "Mappare un indirizzo IPv4 noto nel corrispondente indirizzo MAC fisico.",
                "Instradare i pacchetti tra sottoreti diverse."
            ],
            correct: 2,
            rationale: "ARP opera per scoprire l'indirizzo MAC di un dispositivo locale quando si conosce solo il suo indirizzo IPv4."
        },
        {
            question: "Quale subnet mask assegna esattamente 14 indirizzi IP utilizzabili per gli host in una sottorete?",
            options: [
                "255.255.255.224",
                "255.255.255.240",
                "255.255.255.248",
                "255.255.255.252"
            ],
            correct: 1,
            rationale: "La maschera 255.255.255.240 (/28) lascia 4 bit per gli host. $2^4 - 2 = 16 - 2 = 14$ indirizzi host validi."
        },
        {
            question: "Un router riceve un pacchetto. Quale informazione analizza per determinare l'interfaccia di uscita ottimale per l'instradamento?",
            options: [
                "L'indirizzo MAC di destinazione",
                "L'indirizzo IP di destinazione",
                "L'indirizzo IP sorgente",
                "Il numero di porta TCP di destinazione"
            ],
            correct: 1,
            rationale: "I router sono dispositivi di Layer 3 e scelgono il percorso consultando la tabella di routing basandosi sull'IP di destinazione del pacchetto."
        },
        {
            question: "Quale tipo di indirizzo IPv6 inizia tipicamente con il blocco di bit 'ff00::/8'?",
            options: [
                "Global Unicast",
                "Link-Local",
                "Multicast",
                "Unique Local"
            ],
            correct: 2,
            rationale: "In IPv6, tutti gli indirizzi che iniziano con il prefisso 'ff' sono indirizzi di tipo Multicast."
        },
        {
            question: "Quale affermazione descrive accuratamente il funzionamento del protocollo UDP?",
            options: [
                "È un protocollo orientato alla connessione ad alta affidabilità.",
                "Garantisce che tutti i dati vengano riordinati correttamente alla ricezione.",
                "È un protocollo connectionless a basso overhead, ideale per traffico real-time come VoIP o streaming.",
                "Esegue il 3-way handshake prima di trasmettere."
            ],
            correct: 2,
            rationale: "UDP non ha meccanismi di controllo degli errori o riordino dei segmenti; questo elimina i ritardi e lo rende ideale per servizi che tollerano piccole perdite ma richiedono velocità."
        },
        {
            question: "In quale modalità della riga di comando (CLI) di un dispositivo Cisco si trova l'utente se il prompt mostra la dicitura 'Switch(config-if)#'?",
            options: [
                "Modalità EXEC utente",
                "Modalità EXEC privilegiata",
                "Modalità di configurazione globale",
                "Modalità di configurazione dell'interfaccia"
            ],
            correct: 3,
            rationale: "Il suffisso '(config-if)#' indica che si è entrati nel sotto-menu di configurazione di una specifica porta o interfaccia di rete."
        },
        {
            question: "Quale comando permette di visualizzare la versione del software Cisco IOS corrente, i record hardware, la quantità di memoria e il file di boot caricato?",
            options: [
                "show running-config",
                "show startup-config",
                "show version",
                "show flash"
            ],
            correct: 2,
            rationale: "Il comando 'show version' fornisce un riepilogo esaustivo delle componenti hardware e software del dispositivo Cisco."
        },
        {
            question: "Cosa si intende per 'Half-Duplex' nel contesto della trasmissione dati su un mezzo fisico?",
            options: [
                "I dispositivi possono sia trasmettere che ricevere, ma non contemporaneamente.",
                "I dati viaggiano in una sola direzione in modo permanente.",
                "I dispositivi trasmettono e ricevono simultaneamente senza collisioni.",
                "La velocità del collegamento viene dimezzata per motivi di sicurezza."
            ],
            correct: 0,
            rationale: "In modalità Half-Duplex il canale è condiviso: la trasmissione e la ricezione avvengono in tempi diversi, rendendo necessari protocolli come il CSMA/CD."
        },
        {
            question: "Quale indirizzo IPv4 è un valido indirizzo host pubblico, idoneo per navigare direttamente su Internet?",
            options: [
                "10.15.4.1",
                "172.20.100.5",
                "192.168.1.50",
                "200.10.5.8"
            ],
            correct: 3,
            rationale: "Gli altri tre appartengono ai range privati definiti dalla RFC 1918 (10.0.0.0/8, 172.16.0.0/12, 192.168.0.0/16). 200.10.5.8 è un IP pubblico di classe C."
        },
        {
            question: "Quale componente software memorizza temporaneamente gli indirizzi MAC appresi dinamicamente dallo switch, associandoli alle relative porte fisiche?",
            options: [
                "Tabella di routing",
                "Tabella ARP",
                "Tabella dei descrittori MAC (CAM Table)",
                "Database NVRAM"
            ],
            correct: 2,
            rationale: "La tabella MAC (o Content Addressable Memory - CAM) associa i MAC address rilevati nel campo sorgente dei frame alle porte fisiche dello switch."
        },
        {
            question: "Quale tecnica permette di abbreviare l'indirizzo IPv6 '2001:0db8:0000:0000:0000:0000:0000:0001' applicando le regole ufficiali di compressione?",
            options: [
                "2001:db8::1",
                "2001:db8:0:1",
                "2001:db8::0001",
                "2001:db8:0000::1"
            ],
            correct: 0,
            rationale: "Eliminando gli zeri iniziali e sostituendo la stringa più lunga di zeri consecutivi con il doppio due punti '::', l'indirizzo si contrae in 2001:db8::1."
        },
        {
            question: "Quale messaggio ICMP viene lanciato per verificare la raggiungibilità di un nodo IP remoto (generato dal comando ping)?",
            options: [
                "Echo Reply",
                "Destination Unreachable",
                "Echo Request",
                "Redirect"
            ],
            correct: 2,
            rationale: "Il comando ping invia un pacchetto ICMP Echo Request (Tipo 8). Se la destinazione è attiva, risponde con un Echo Reply (Tipo 0)."
        },
        {
            question: "Quale subnet mask corrisponde alla notazione CIDR /30?",
            options: [
                "255.255.255.240",
                "255.255.255.248",
                "255.255.255.252",
                "255.255.255.254"
            ],
            correct: 2,
            rationale: "Una /30 ha 30 bit a 1. L'ultimo ottetto ha 6 bit di rete accesi ($128+64+32+16+8+4 = 252$), definendo una maschera 255.255.255.252."
        },
        {
            question: "Quale porta logica di default viene impiegata dal protocollo HTTP per le connessioni web non cifrate?",
            options: [
                "Porta TCP 20",
                "Porta TCP 53",
                "Porta TCP 80",
                "Porta TCP 443"
            ],
            correct: 2,
            rationale: "HTTP opera sulla porta 80, mentre HTTPS (cifrato) sfrutta la porta 443. La porta 53 è del DNS."
        },
        {
            question: "Cosa fa uno switch Layer 2 quando riceve un frame unicast il cui MAC di destinazione non è presente all'interno della sua tabella CAM (Unknown Unicast)?",
            options: [
                "Scarta immediatamente il frame.",
                "Invia un messaggio di errore all'host sorgente.",
                "Esegue il flooding, inoltrando il frame da tutte le porte tranne quella da cui è arrivato.",
                "Interroga il server DNS locale."
            ],
            correct: 2,
            rationale: "In caso di Unknown Unicast, lo switch replica il frame su tutte le porte attive dello stesso dominio di broadcast (tranne quella di ingresso) per stanare la destinazione."
        },
        {
            question: "Quale comando permette di uscire da un qualsiasi sotto-menu di configurazione e ritornare istantaneamente alla modalità EXEC privilegiata (prompt con il cancelletto #)?",
            options: [
                "exit",
                "end (o la combinazione Ctrl-Z)",
                "disable",
                "clear"
            ],
            correct: 1,
            rationale: "Il comando 'end' o la scorciatoia 'Ctrl-Z' interrompono la sessione di configurazione riportando l'utente alla radice della modalità privilegiata, a differenza di 'exit' che torna indietro di un solo livello."
        },
        {
            question: "Quale protocollo dello stack TCP/IP agisce al livello di Trasporto fornendo un controllo di flusso tramite meccanismi di Windowing e acknowledgment?",
            options: [
                "IP",
                "UDP",
                "TCP",
                "ICMP"
            ],
            correct: 2,
            rationale: "TCP gestisce l'affidabilità, la segmentazione e il controllo di flusso regolando la dimensione della finestra di ricezione dinamica."
        },
        {
            question: "Qual è la lunghezza totale in bit di un indirizzo fisico MAC (Media Access Control)?",
            options: [
                "32 bit",
                "48 bit",
                "64 bit",
                "128 bit"
            ],
            correct: 1,
            rationale: "Un indirizzo MAC è lungo 48 bit, scritti sotto forma di 12 cifre esadecimali raggruppate (es. 00:60:2F:...). Gli indirizzi IPv4 sono a 32 bit e quelli IPv6 a 128 bit."
        },
        {
            question: "Che tipo di indirizzo IPv6 è identificato dal prefisso 'fe80::/10'?",
            options: [
                "Global Unicast Address",
                "Unique Local Address",
                "Link-Local Address",
                "Loopback Address"
            ],
            correct: 2,
            rationale: "Gli indirizzi Link-Local (fe80::/10) sono obbligatori su ogni interfaccia IPv6 e servono per la comunicazione locale nello stesso segmento."
        },
        {
            question: "Quale caratteristica distingue un attacco di tipo Phishing?",
            options: [
                "Il tentativo di mandare in crash un server web saturandone la banda.",
                "L'invio di email ingannevoli camuffate da istituti legittimi per rubare credenziali e dati sensibili.",
                "L'iniezione di codice maligno nei database aziendali.",
                "La scansione automatizzata delle porte aperte su un router."
            ],
            correct: 1,
            rationale: "Il Phishing è una tecnica di ingegneria sociale che sfrutta email o siti specchietto contraffatti per spingere l'utente a cedere password o informazioni riservate."
        },
        {
            question: "Quale metodo di assegnazione dinamica IPv6 permette a un host di generare autonomamente il proprio indirizzo sfruttando i messaggi Router Advertisement, senza l'ausilio di un server DHCPv6 Stateful?",
            options: [
                "SLAAC (Stateless Address Autoconfiguration)",
                "NAT64",
                "ARPv6",
                "Stateful DHCPv6"
            ],
            correct: 0,
            rationale: "SLAAC consente a un host di ricevere il prefisso di rete dal router tramite pacchetti RA e completare l'indirizzo generando in autonomia l'Interface ID."
        },
        {
            question: "Quale intervallo di indirizzi IPv4 definisce il range di indirizzi di loopback locali riservati per testare lo stack software TCP/IP?",
            options: [
                "10.0.0.0 a 10.255.255.255",
                "127.0.0.0 a 127.255.255.255",
                "169.254.0.0 a 169.254.255.255",
                "224.0.0.0 a 239.255.255.255"
            ],
            correct: 1,
            rationale: "L'intera classe 127.0.0.0/8 è dedicata ai test interni di loopback sull'host locale (il più comune è 127.0.0.1)."
        },
        {
            question: "Nel protocollo TCP, quale flag viene impostato all'interno del segmento per avviare la procedura di chiusura formale ed elegante di una sessione di comunicazione?",
            options: [
                "SYN",
                "ACK",
                "FIN",
                "RST"
            ],
            correct: 2,
            rationale: "Il flag FIN (Finish) viene utilizzato per terminare la connessione, mentre il flag SYN avvia la connessione e RST la interrompe bruscamente."
        },
        {
            question: "Cosa indica l'acronimo NVRAM all'interno dell'architettura hardware dei dispositivi Cisco?",
            options: [
                "Network Virtual Random Access Memory",
                "Non-Volatile Random Access Memory",
                "New Version Read Only Memory",
                "Native Vector RAM"
            ],
            correct: 1,
            rationale: "La NVRAM è una memoria permanente che non perde i dati allo spegnimento del dispositivo e contiene il file di configurazione iniziale (startup-config)."
        },
        {
            question: "Quale livello del modello OSI si occupa della formattazione, compressione e cifratura dei dati (es. conversioni da stringhe a file JPEG, MP3 o formati GIF)?",
            options: [
                "Livello di Sessione (Layer 5)",
                "Livello di Presentazione (Layer 6)",
                "Livello di Applicazione (Layer 7)",
                "Livello di Trasporto (Layer 4)"
            ],
            correct: 1,
            rationale: "Il livello di Presentazione garantisce che le informazioni inviate dal livello applicativo di un sistema siano leggibili dal livello applicativo dell'altro sistema, occupandosi della sintassi e della codifica."
        },
        {
            question: "Quale comando permette di configurare una stringa testuale segreta per accedere via Telnet o SSH alle linee virtuali (VTY) di uno switch Cisco?",
            options: [
                "Switch(config)# line vty 0 4\nSwitch(config-line)# password secret_key",
                "Switch(config)# enable secret secret_key",
                "Switch(config)# line console 0\nSwitch(config-line)# password secret_key",
                "Switch(config)# service password-encryption"
            ],
            correct: 0,
            rationale: "L'accesso remoto si configura entrando nel sotto-menu 'line vty 0 4' (o 0 15) e applicando il comando 'password' abbinato a 'login'."
        },
        {
            question: "Quale indirizzo IPv4 è l'ultimo indirizzo host utilizzabile all'interno della sottorete 192.168.1.0/24?",
            options: [
                "192.168.1.254",
                "192.168.1.255",
                "192.168.1.1",
                "192.168.0.254"
            ],
            correct: 0,
            rationale: "In una rete /24, l'indirizzo .255 è riservato al broadcast. Di conseguenza, l'ultimo IP utile assegnabile a una scheda di rete è il .254."
        },
        {
            question: "Quale affermazione definisce il concetto di 'Collo di bottiglia' (Bottleneck) in una infrastruttura di rete?",
            options: [
                "Il punto della rete con la larghezza di banda (throughput) inferiore, che rallenta l'intero flusso dei dati.",
                "Un errore software che cancella le tabelle di routing.",
                "Un tipo di cavo in fibra rotto.",
                "Un attacco hacker mirato alla console dei router."
            ],
            correct: 0,
            rationale: "Il bottleneck indica il segmento con minore capacità trasmissiva lungo un percorso, limitando la velocità massima end-to-end alla sua stessa portata."
        },
        {
            question: "Quale protocollo opera a livello Layer 7 permettendo il caricamento e lo scaricamento di file da un server senza implementare alcun sistema di autenticazione o controllo affidabile (basandosi su UDP)?",
            options: [
                "FTP",
                "TFTP",
                "SFTP",
                "HTTPS"
            ],
            correct: 1,
            rationale: "TFTP (Trivial File Transfer Protocol) è una versione ultrasemplificata di FTP. Lavora sulla porta UDP 69, non richiede login ed è privo di controlli avanzati."
        },
        {
            question: "Quale caratteristica descrive una tipologia di rete logica Peer-to-Peer (P2P)?",
            options: [
                "I dispositivi hanno ruoli dedicati: alcuni sono solo server centrali e altri solo client.",
                "Ogni computer può agire contemporaneamente sia come client che come server, condividendo risorse direttamente senza nodi centrali.",
                "I dati transitano esclusivamente via onde radio wireless.",
                "La rete richiede obbligatoriamente un mainframe centralizzato."
            ],
            correct: 1,
            rationale: "Nelle strutture P2P non esiste una gerarchia rigida; tutti i nodi cooperano alla pari condividendo file e risorse in modo decentralizzato."
        },
        {
            question: "Qual è il range di indirizzi IPv4 autoconfigurati da Windows e sistemi operativi moderni (APIPA) quando non è possibile contattare nessun server DHCP?",
            options: [
                "127.0.0.0 a 127.255.255.255",
                "169.254.0.0 a 169.254.255.255",
                "192.168.0.0 a 192.168.255.255",
                "0.0.0.0"
            ],
            correct: 1,
            rationale: "Il range 169.254.0.0/16 è riservato all'autoselezione link-local (APIPA) in mancanza di un server DHCP attivo."
        },
        {
            question: "Nel modello OSI, quale livello si occupa del controllo degli errori fisici, della delimitazione dei frame tramite flag di inizio/fine e del controllo di accesso al mezzo (MAC)?",
            options: [
                "Livello Fisico (Layer 1)",
                "Livello Data Link (Layer 2)",
                "Livello di Network (Layer 3)",
                "Livello di Trasporto (Layer 4)"
            ],
            correct: 1,
            rationale: "Queste funzionalità appartengono al Layer 2 (Data Link), che fa da ponte tra gli impulsi fisici del Layer 1 e l'indirizzamento logico del Layer 3."
        },
        {
            question: "Quale comando permette di verificare la sintassi dei comandi digitati salvando permanentemente la configurazione attiva nella memoria non volatile NVRAM?",
            options: [
                "save configuration",
                "copy running-config startup-config",
                "copy startup-config running-config",
                "write memory flash"
            ],
            correct: 1,
            rationale: "Il comando clona la running-config della RAM sovrascrivendo la startup-config della NVRAM, blindando le modifiche contro eventuali riavvii accidentali."
        },
        {
            question: "Quale parametro dell'header IPv4 indica ai router quale protocollo di livello superiore (es. TCP o UDP) prenderà in carico il payload del pacchetto?",
            options: [
                "Time to Live",
                "Protocol",
                "Version",
                "Identification"
            ],
            correct: 1,
            rationale: "Il campo Protocol identifica il protocollo del Layer 4 successivo (es. valore 6 per TCP, valore 17 per UDP, valore 1 per ICMP)."
        },
        {
            question: "Quale tipologia di interferenza è causata da segnali radio, motori elettrici o lampade fluorescenti che disturbano i cavi in rame compromettendo la trasmissione dei dati?",
            options: [
                "Crosstalk",
                "EMI / RFI (Interferenza Elettromagnetica / Radiofrequenza)",
                "Attenuazione del segnale",
                "Dispersione cromatica"
            ],
            correct: 1,
            rationale: "Le EMI e le RFI sono disturbi elettromagnetici esterni che sporcano i segnali elettrici all'interno dei conduttori in rame."
        },
        {
            question: "Quale indirizzo IPv6 rappresenta il prefisso riservato per le comunicazioni di tipo Multicast destinate a tutti i nodi del link locale corrente (All-Nodes Multicast)?",
            options: [
                "ff02::1",
                "ff02::2",
                "fe80::1",
                "::1"
            ],
            correct: 0,
            rationale: "L'indirizzo ff02::1 contatta contemporaneamente tutti i dispositivi IPv6 attivi sul segmento (sostituendo il broadcast IPv4), mentre ff02::2 contatta tutti i router."
        },
        {
            question: "Quale dispositivo di rete opera al livello 1 (Fisico) rigenerando i segnali elettrici o ottici su tutte le sue porte senza analizzare gli indirizzi MAC o IP?",
            options: [
                "Switch",
                "Hub",
                "Router",
                "Firewall"
            ],
            correct: 1,
            rationale: "L'Hub è un ripetitore multiporta stupido: rigenera i bit in ingresso e li spara in copia su tutte le porte, creando un unico grande dominio di collisione."
        },
        {
            question: "Quale metodo di instradamento permette a un router di inoltrare pacchetti basandosi su configurazioni inserite manualmente dall'amministratore, senza scambi di messaggi tra router vicini?",
            options: [
                "Routing Dinamico (OSPF)",
                "Routing Statico",
                "Routing di default dinamico",
                "Switching asimmetrico"
            ],
            correct: 1,
            rationale: "Il routing statico non consuma banda né CPU per i calcoli algoritmici, poiché le rotte vengono digitate e mantenute a mano dal sistemista."
        },
        {
            question: "Nel processo di Three-Way Handshake del protocollo TCP, quale sequenza di flag viene scambiata tra client e server per aprire correttamente una sessione?",
            options: [
                "SYN, ACK, FIN",
                "SYN, SYN-ACK, ACK",
                "DATA, ACK, CLOSE",
                "RST, SYN, ACK"
            ],
            correct: 1,
            rationale: "La sequenza esatta prevede: 1. SYN (client), 2. SYN-ACK (server come risposta e proposta), 3. ACK (client che conferma)."
        },
        {
            question: "Quale standard Ethernet specifica i dettagli del cablaggio in rame a doppie intrecciate e le logiche del CSMA/CD?",
            options: [
                "IEEE 802.11",
                "IEEE 802.3",
                "IEEE 802.1Q",
                "IEEE 802.1x"
            ],
            correct: 1,
            rationale: "Lo standard IEEE 802.3 definisce formalmente le specifiche per le reti cablate Ethernet terrestri."
        },
        {
            question: "Quale indirizzo IPv4 corrisponde a una sottorete di classe A privata?",
            options: [
                "192.168.10.5",
                "172.16.4.1",
                "10.250.1.1",
                "224.0.0.1"
            ],
            correct: 2,
            rationale: "La classe A privata copre l'intero blocco 10.0.0.0/8 secondo le specifiche della RFC 1918."
        },
        {
            question: "Quale comando permette di visualizzare la cronologia degli ultimi comandi digitati nella sessione CLI corrente di un apparato Cisco?",
            options: [
                "show history",
                "show running-config",
                "show terminal",
                "display commands"
            ],
            correct: 0,
            rationale: "Il comando 'show history' elenca i comandi immessi precedentemente nel terminale per facilitarne il recupero."
        },
        {
            question: "Qual è la dimensione massima predefinita del payload dei dati (MTU - Maximum Transmission Unit) per un frame Ethernet standard?",
            options: [
                "64 byte",
                "512 byte",
                "1500 byte",
                "9000 byte"
            ],
            correct: 2,
            rationale: "L'MTU standard per i pacchetti IP all'interno di un frame Ethernet è di 1500 byte. Valori superiori (es. 9000) fanno riferimento ai Jumbo Frame."
        },
// --- CCNA 1: BLOCCO 3 DI 3 (DOMANDE 101-150) ---
        {
            question: "Quale comando permette di verificare la connettività di rete visualizzando l'elenco dei router (hop) attraversati da un pacchetto per raggiungere la destinazione?",
            options: ["ping", "traceroute (o tracert)", "show ip route", "nslookup"],
            correct: 1,
            rationale: "Traceroute sfrutta i messaggi ICMP e incrementa progressivamente il TTL (da 1 in poi) per identificare ogni router lungo il percorso."
        },
        {
            question: "Un host invia un messaggio a un gruppo selezionato di host appartenenti a uno specifico servizio senza disturbare gli altri nodi della LAN. Che tipo di trasmissione è?",
            options: ["Unicast", "Broadcast", "Multicast", "Anycast"],
            correct: 2,
            rationale: "Il Multicast invia pacchetti da un singolo mittente a un gruppo specifico di destinatari iscritti a un determinato indirizzo logico."
        },
        {
            question: "Quale subnet mask esprime la notazione CIDR /26?",
            options: ["255.255.255.128", "255.255.255.192", "255.255.255.224", "255.255.255.240"],
            correct: 1,
            rationale: "In una maschera /26, l'ultimo ottetto ha i primi due bit di rete accesi ($128 + 64 = 192$), dando come risultato 255.255.255.192."
        },
        {
            question: "In una rete Ethernet condivisa in modalità Half-Duplex, quale metodo viene adottato per rilevare e gestire le collisioni di frame?",
            options: ["CSMA/CA", "CSMA/CD", "Token Passing", "Priority Queueing"],
            correct: 1,
            rationale: "Ethernet cablato in Half-Duplex usa il CSMA/CD (Carrier Sense Multiple Access with Collision Detection) per ascoltare il canale e gestire i rinvii in caso di collisione."
        },
        {
            question: "Qual è il compito principale dello standard IEEE 802.2 all'interno del livello Data Link?",
            options: ["Gestire l'indirizzamento fisico MAC.", "Definire il controllo del collegamento logico (LLC) per dialogare con il Layer 3.", "Specificare la codifica dei bit nei cavi in rame.", "Regolare l'alimentazione PoE."],
            correct: 1,
            rationale: "Lo standard 802.2 definisce il sottolivello LLC, che funge da interfaccia software indipendente tra i protocolli di rete (Layer 3) e l'hardware sottostante."
        },
        {
            question: "Quale tipo di indirizzo IPv6 inizia con il prefisso '2001:db8::/32' nelle topologie d'esame e aziendali?",
            options: ["Indirizzo di Loopback", "Indirizzo riservato per documentazione ed esempi", "Indirizzo Link-Local permanente", "Indirizzo Multicast globale"],
            correct: 1,
            rationale: "La RFC 3849 riserva formalmente il prefisso 2001:db8::/32 esclusivamente per scopi di documentazione ed esempi didattici."
        },
        {
            question: "Quale campo del segmento TCP viene impiegato dal destinatario per confermare la corretta ricezione dei byte precedenti e indicare il prossimo byte atteso?",
            options: ["Sequence Number", "Acknowledgment Number", "Window Size", "Urgent Pointer"],
            correct: 1,
            rationale: "L'Acknowledgment Number (ACK) in TCP è di tipo 'aspettativo': indica al mittente il numero del byte successivo che il destinatario desidera ricevere."
        },
        {
            question: "Quale comando permette di visualizzare la configurazione di boot e i parametri salvati permanentemente nella NVRAM di un router Cisco?",
            options: ["show running-config", "show startup-config", "show flash", "show version"],
            correct: 1,
            rationale: "Il comando 'show startup-config' legge direttamente il file memorizzato nella NVRAM, caricato dal dispositivo ad ogni avvio."
        },
        {
            question: "Quale attacco ha l'obiettivo di saturare la tabella dei MAC address (CAM table) di uno switch inviando migliaia di frame con MAC sorgenti falsi?",
            options: ["DHCP Spoofing", "MAC Address Flooding", "ARP Poisoning", "Smurf Attack"],
            correct: 1,
            rationale: "Il MAC Flooding riempie la CAM table costringendo lo switch a comportarsi come un Hub (eseguendo il flooding di tutto il traffico), esponendo la LAN allo sniffing."
        },
        {
            question: "Quale vantaggio offre lo schema di indirizzamento VLSM (Variable Length Subnet Mask)?",
            options: ["Permette di utilizzare una sola subnet mask per tutta l'azienda.", "Consente di applicare maschere di lunghezza differente alle sottoreti, riducendo lo spreco di IP.", "Disattiva automaticamente il routing inter-VLAN.", "Sostituisce la necessità di configurare rotte statiche."],
            correct: 1,
            rationale: "VLSM consente di ottimizzare lo spazio di indirizzamento creando sottoreti su misura per le reali necessità di host di ciascun segmento (es. /30 per i link point-to-point)."
        },
        {
            question: "Che tipo di messaggio ICMPv6 viene inviato da un router per annunciare periodicamente la propria presenza e i parametri di rete alla LAN?",
            options: ["Router Solicitation (RS)", "Router Advertisement (RA)", "Neighbor Solicitation (NS)", "Neighbor Advertisement (NA)"],
            correct: 1,
            rationale: "I messaggi RA (Router Advertisement) vengono inviati periodicamente o in risposta a un RS per fornire agli host i parametri per l'autoconfigurazione."
        },
        {
            question: "Quale caratteristica descrive la fibra ottica multimodale (MMF) rispetto alla fibra monomodale (SMF)?",
            options: ["Usa un laser ed ha un nucleo estremamente piccolo.", "Usa un LED come sorgente luminosa ed è ideale per distanze brevi (LAN aziendali o Data Center).", "È soggetta a interferenze elettromagnetiche esterne.", "Supporta una sola riflessione della luce."],
            correct: 1,
            rationale: "La fibra multimodale ha un nucleo più largo, sfrutta sorgenti LED più economiche ed è indicata per coprire distanze ridotte all'interno di edifici."
        },
        {
            question: "Quale comando IOS disabilita la ricerca DNS automatica sulla CLI Cisco, evitando lunghe attese in caso di comandi digitati erroneamente?",
            options: ["no ip boot-lookup", "no ip domain-lookup", "no service dns-search", "clear line vty 0"],
            correct: 1,
            rationale: "Il comando globale 'no ip domain-lookup' impedisce al dispositivo di interpretare un errore di battitura come un nome host da risolvere via DNS."
        },
        {
            question: "Quale protocollo del livello applicativo lavora in modalità stateless sulla porta UDP 67 e 68 per l'assegnazione automatica dei parametri IP?",
            options: ["DNS", "DHCP", "TFTP", "SNMP"],
            correct: 1,
            rationale: "DHCP per IPv4 sfrutta il protocollo di trasporto UDP sulle porte 67 (server) e 68 (client) per gestire le richieste in broadcast."
        },
        {
            question: "Quale subnet mask fornisce un pool composto da esattamente 6 indirizzi host utilizzabili?",
            options: ["255.255.255.224", "255.255.255.240", "255.255.255.248", "255.255.255.252"],
            correct: 2,
            rationale: "La maschera 255.255.255.248 (/29) lascia 3 bit per gli host. $2^3 - 2 = 8 - 2 = 6$ IP host utili."
        },
        {
            question: "Quale campo dell'header IPv4 viene esaminato dai firewall e dai dispositivi di rete per implementare politiche di Quality of Service (QoS)?",
            options: ["Identification", "Differentiated Services (DiffServ o campo ToS)", "Fragment Offset", "Version"],
            correct: 1,
            rationale: "Il campo Differentiated Services (Type of Service) contiene i bit utilizzati per marcare e dare priorità a specifici pacchetti (es. traffico voce)."
        },
        {
            question: "Nel modello OSI, quale livello si occupa di stabilire, mantenere, sincronizzare e terminare le conversazioni tra applicazioni posizionate su host remoti?",
            options: ["Livello di Trasporto (Layer 4)", "Livello di Sessione (Layer 5)", "Livello di Presentazione (Layer 6)", "Livello di Applicazione (Layer 7)"],
            correct: 1,
            rationale: "Il Layer 5 (Sessione) gestisce i dialoghi, i checkpoint e la sincronizzazione delle sessioni software tra i due endpoint."
        },
        {
            question: "Quale indirizzo IPv4 rappresenta un indirizzo di tipo multicast riservato per inviare pacchetti a tutti i nodi e host della rete locale?",
            options: ["224.0.0.1", "224.0.0.2", "224.0.0.5", "255.255.255.255"],
            correct: 0,
            rationale: "L'indirizzo multicast 224.0.0.1 raggiunge tutti i dispositivi IP attivi sul segmento di rete locale."
        },
        {
            question: "Quale affermazione descrive la funzione del comando 'logging synchronous' inserito sulle linee console o VTY di un apparato Cisco?",
            options: ["Sincronizza l'orologio dell'apparato con un server NTP esterno.", "Impedisce ai messaggi di log di sistema (syslog) di interrompere l'inserimento dei comandi da parte dell'utente.", "Invia i log direttamente alla memoria Flash.", "Cifra la sessione del terminale corrente."],
            correct: 1,
            rationale: "Il comando 'logging synchronous' ridisegna la riga di comando corrente se compare un messaggio di log improvviso, mantenendo pulito l'input dell'utente."
        },
        {
            question: "Qual è il range di valori decimali utilizzabili per identificare il primo ottetto di un indirizzo IP pubblico appartenente alla Classe A?",
            options: ["1 a 126", "128 a 191", "192 a 223", "224 a 239"],
            correct: 0,
            rationale: "La Classe A copre da 1.x.x.x a 126.x.x.x. Il valore 127 è escluso perché interamente riservato alle funzionalità di loopback."
        },
        {
            question: "Quale caratteristica del protocollo UDP lo rende preferibile a TCP per lo streaming video e il gaming online?",
            options: ["La capacità di ritrasmettere i pacchetti persi.", "L'assenza di meccanismi di controllo e overhead ridotto, che minimizza la latenza.", "La cifratura nativa dei dati.", "L'uso obbligatorio di connessioni dedicate."],
            correct: 1,
            rationale: "Non dovendo gestire acknowledgments o ritrasmissioni, UDP invia i pacchetti senza ritardi, scenario perfetto per i flussi real-time."
        },
        {
            question: "Cosa succede se uno switch riceve un frame Ethernet con una dimensione inferiore a 64 byte (chiamato Runt frame)?",
            options: ["Lo switch memorizza il frame nella NVRAM.", "Lo switch esegue il flooding del frame su tutte le porte.", "Lo switch scarta immediatamente il frame perché considerato frutto di una collisione o di un errore.", "Lo switch richiede la ritrasmissione automatica del pacchetto IP."],
            correct: 2,
            rationale: "La dimensione minima di un frame Ethernet standard è 64 byte. I frame più corti (runt frames) indicano anomalie o collisioni e vengono scartati automaticamente a livello Layer 2."
        },
        {
            question: "Quale comando permette di salvare la configurazione attiva in modo che rimanga persistente anche dopo lo spegnimento fisico del dispositivo Cisco?",
            options: ["write memory", "copy running-config startup-config", "save active-config", "Entrambe le risposte A e B sono corrette"],
            correct: 3,
            rationale: "Sia il comando standard ufficiale 'copy running-config startup-config' sia quello legacy 'write memory' (o 'wr') salvano la configurazione corrente nella NVRAM."
        },
        {
            question: "Quale sottolivello del Layer Data Link si occupa di aggiungere informazioni di controllo nell'header per identificare quale protocollo di Layer 3 ha generato i dati?",
            options: ["MAC (Media Access Control)", "LLC (Logical Link Control)", "Network Interface Card", "ARP Sublayer"],
            correct: 1,
            rationale: "Il sottolivello LLC inserisce i parametri che permettono a più protocolli di rete (es. IPv4, IPv6) di condividere la medesima interfaccia fisica a livello Data Link."
        },
        {
            question: "Quale porta logica viene sfruttata dal protocollo sicuro HTTPS per proteggere il traffico web tramite crittografia TLS/SSL?",
            options: ["Porta 80", "Porta 443", "Porta 22", "Porta 8080"],
            correct: 1,
            rationale: "HTTPS (Hypertext Transfer Protocol Secure) utilizza di default la porta TCP 443 per stabilire connessioni web protette."
        },
        {
            question: "Un host invia una richiesta ARP sulla rete locale. Qual è l'indirizzo MAC di destinazione inserito nell'header del frame?",
            options: ["00-00-00-00-00-00", "FF-FF-FF-FF-FF-FF", "255.255.255.255", "L'indirizzo MAC del gateway"],
            correct: 1,
            rationale: "Le richieste ARP devono essere lette da tutti i nodi del segmento per trovare il legittimo proprietario dell'IP cercato, perciò vengono inviate al MAC di broadcast FF-FF-FF-FF-FF-FF."
        },
        {
            question: "Quale protocollo di rete viene utilizzato per sincronizzare l'orario di sistema di router, switch e server aziendali con una sorgente temporale di riferimento?",
            options: ["NTP (Network Time Protocol)", "NAT", "SNMP", "DHCP"],
            correct: 0,
            rationale: "NTP consente di mantenere sincronizzati gli orologi dei dispositivi interni, elemento cruciale per l'analisi cronologica dei log di sicurezza (syslog)."
        },
        {
            question: "Quale indirizzo IPv6 rappresenta l'indirizzo speciale non specificato (Unspecified Address) utilizzato da un host che non ha ancora un IP valido configurato?",
            options: ["::1", "::", "fe80::", "ff02::1"],
            correct: 1,
            rationale: "L'indirizzo formato da tutti zeri (compresso come '::') corrisponde all'indirizzo non specificato (analogo allo 0.0.0.0 del mondo IPv4)."
        },
        {
            question: "Quale tipo di cavo in rame richiede una schermatura metallica esterna attorno alle coppie di fili per operare in ambienti industriali ad altissimo tasso di interferenze?",
            options: ["Cavo UTP", "Cavo STP (Shielded Twisted Pair)", "Cavo coassiale leggero", "Cavo Flat Console"],
            correct: 1,
            rationale: "Il cavo STP incorpora una schermatura protettiva a maglia o foglio metallico per bloccare le severe interferenze elettromagnetiche (EMI) esterne."
        },
        {
            question: "Nel contesto dei protocolli di routing statico, che cos'è una rotta statica di default?",
            options: ["La prima rotta inserita nella tabella dal sistema operativo Cisco IOS.", "Una rotta con prefisso 0.0.0.0/0 utilizzata per instradare qualsiasi pacchetto non corrispondente a rotte specifiche.", "Una rotta dinamica calcolata dall'algoritmo SPF.", "Una rotta di backup a priorità inferiore."],
            correct: 1,
            rationale: "La rotta di default (o Gateway of Last Resort) raccoglie tutto il traffico che non trova corrispondenze nella tabella e lo spinge verso l'esterno (tipicamente verso Internet)."
        },
        {
            question: "Quale combinazione di tasti permette di completare automaticamente un comando parziale digitato sulla CLI di un dispositivo Cisco?",
            options: ["Spazio", "Tab (Tabulatore)", "Invio", "Freccia Su"],
            correct: 1,
            rationale: "Premendo il tasto Tab, la CLI Cisco completa automaticamente la parola chiave parziale corrente, a patto che i caratteri digitati siano univoci."
        },
        {
            question: "Quale parametro del protocollo TCP permette di negoziare la quantità massima di dati (in byte) che un host può inserire in un singolo segmento prima dell'invio?",
            options: ["MTU", "MSS (Maximum Segment Size)", "TTL", "Window State"],
            correct: 1,
            rationale: "L'MSS definisce la dimensione massima della porzione dati all'interno del segmento TCP, escludendo le intestazioni dei Layer 3 e 4."
        },
        {
            question: "Quale messaggio ICMPv6 notifica a un host mittente che il percorso verso il nodo di destinazione è interrotto o bloccato da un firewall?",
            options: ["Packet Too Big", "Destination Unreachable (Destinazione non raggiungibile)", "Time Exceeded", "Echo Request"],
            correct: 1,
            rationale: "I messaggi Destination Unreachable informano la sorgente del pacchetto del fallimento del recapito dovuto a problemi strutturali o filtri logici."
        },
        {
            question: "Quale architettura di rete prevede l'uso di politiche di QoS per garantire priorità assoluta e larghezza di banda protetta al traffico telefonico aziendale?",
            options: ["Reti Convergenti", "Reti Peer-to-Peer tradizionali", "Sistemi a commutazione di circuito storici", "Reti isolate fisicamente"],
            correct: 0,
            rationale: "Le reti convergenti accorpano dati, video e voce su un'unica infrastruttura IP, rendendo obbligatoria la QoS per evitare interruzioni nei flussi voce."
        },
        {
            question: "Quale indirizzo IP rappresenta un indirizzo valido per un host appartenente alla classe C privata?",
            options: ["10.1.1.254", "172.16.1.1", "192.168.50.4", "169.254.1.1"],
            correct: 2,
            rationale: "Il blocco privato di Classe C definito dalla RFC 1918 si estende da 192.168.0.0 a 192.168.255.255."
        },
        {
            question: "Quale comando permette di cancellare completamente la configurazione iniziale memorizzata nella NVRAM per resettare un apparato Cisco ai valori di fabbrica?",
            options: ["delete flash", "reload", "erase startup-config", "clear running-config"],
            correct: 2,
            rationale: "Il comando 'erase startup-config' (o 'write erase') ripulisce la NVRAM eliminando la configurazione salvata. Il reset si completa eseguendo successivamente un 'reload'."
        },
        {
            question: "Quale tipologia di attacco informatico punta a esaurire l'intero pool di indirizzi IP disponibili su un server DHCP aziendale inviando flussi continui di richieste fittizie?",
            options: ["DHCP Starvation", "DHCP Spoofing", "SYN Flood", "Man-in-the-Middle"],
            correct: 0,
            rationale: "L'attacco di DHCP Starvation invia pacchetti DHCP Discover a raffica modificando continuamente il MAC sorgente, prosciugando tutti gli IP disponibili per i client legittimi."
        },
        {
            question: "Quale tecnica di multiplexing viene applicata sulla fibra ottica per trasmettere simultaneamente flussi di dati multipli usando lunghezze d'onda (colori) differenti sulla stessa tratta?",
            options: ["TDM", "FDM", "WDM (Wave Division Multiplexing)", "STDM"],
            correct: 2,
            rationale: "WDM (Wave Division Multiplexing) modula più segnali ottici su frequenze di luce distinte per incrementare drasticamente la capacità trasmissiva di una singola fibra."
        },
        {
            question: "Nel protocollo TCP, cosa si intende per 'Meccanismo di controllo della congestione'?",
            options: ["La cifratura dei pacchetti lenti.", "La riduzione dinamica della dimensione della finestra di invio dei dati quando vengono rilevati pacchetti persi o scartati.", "Il blocco totale delle porte fisiche dello switch.", "La conversione del traffico in formato UDP."],
            correct: 1,
            rationale: "TCP rileva la congestione di rete tramite la perdita dei pacchetti (mancata ricezione degli ACK) e interviene riducendo la finestra trasmissiva per stabilizzare il flusso."
        },
        {
            question: "Qual è il limite massimo di caratteri (lunghezza del testo) supportato dal comando hostname sui sistemi Cisco IOS?",
            options: ["32 caratteri", "63 caratteri", "128 caratteri", "255 caratteri"],
            correct: 1,
            rationale: "Le linee guida dei sistemi operativi Cisco stabiliscono che la stringa identificativa dell'apparato (hostname) non debba superare i 63 caratteri."
        },
        {
            question: "Quale protocollo applicativo permette di scambiare posta elettronica trasferendo i messaggi tra i server di posta della rete (Mail Transfer)?",
            options: ["POP3", "IMAP", "SMTP", "HTTP"],
            correct: 2,
            rationale: "SMTP (Simple Mail Transfer Protocol) gestisce l'invio e il trasferimento dei messaggi tra mail server, mentre POP3 e IMAP servono ai client per scaricare o consultare la posta."
        },
        {
            question: "Quale indirizzo esadecimale rappresenta il prefisso di un indirizzo IPv6 di tipo Multicast destinato specificamente a tutti i router del link-local corrente?",
            options: ["ff02::1", "ff02::2", "fe80::2", "ff02::5"],
            correct: 1,
            rationale: "L'indirizzo multicast ff02::2 contatta esclusivamente tutti i router attivi sul segmento locale corrente."
        },
        {
            question: "Quale componente hardware dello switch controlla l'inoltro dei frame analizzando l'indirizzo MAC sorgente per popolare dinamicamente la tabella CAM?",
            options: ["Il processore centrale (CPU)", "L'ASIC (Application-Specific Integrated Circuit) e la logica di indirizzamento della porta", "Il registro NVRAM", "Il bus della memoria Flash"],
            correct: 1,
            rationale: "Gli switch moderni elaborano l'apprendimento e l'inoltro dei frame direttamente a livello hardware tramite chip dedicati ad altissima velocità chiamati ASIC."
        },
        {
            question: "Quale comando permette di proteggere l'accesso alla porta console fisica di uno switch Cisco richiedendo l'inserimento di una password?",
            options: ["Switch(config)# line console 0\nSwitch(config-line)# password cisco\nSwitch(config-line)# login", "Switch(config)# enable secret cisco", "Switch(config)# crypto key generate rsa", "Switch(config-if)# port-security password cisco"],
            correct: 0,
            rationale: "Per proteggere la console fisica occorre entrare nella configurazione della linea, definire la password e, comando cruciale, digitare 'login' per forzarne la richiesta."
        },
        {
            question: "In uno scenario VLSM, qual è l'indirizzo di rete della sottorete successiva se la rete di partenza 192.168.1.0/24 viene segmentata inserendo una prima maschera /26?",
            options: ["192.168.1.32", "192.168.1.64", "192.168.1.128", "192.168.2.0"],
            correct: 1,
            rationale: "Una sottorete /26 consuma un blocco di 64 indirizzi totali ($2^6 = 64$). Di conseguenza, la prima subnet va da .0 a .63, e la seconda rete utile parte esattamente da 192.168.1.64."
        },
        {
            question: "Quale tipo di messaggio ICMPv6 viene generato da un dispositivo per verificare la raggiungibilità fisica a livello Layer 2 di un indirizzo IPv6 noto sul link locale?",
            options: ["Neighbor Solicitation (NS)", "Neighbor Advertisement (NA)", "Router Solicitation", "Echo Reply"],
            correct: 0,
            rationale: "I messaggi NS (Neighbor Solicitation) corrispondono funzionalmente alle richieste ARP del mondo IPv4, sfruttati per scoprire il MAC associato a un IP."
        },
        {
            question: "Quale parametro del comando 'ping' su sistemi operativi Windows permette di inviare pacchetti ICMP in modo continuo finché non viene interrotto manualmente?",
            options: ["ping -t", "ping -n", "ping -l", "ping -a"],
            correct: 0,
            rationale: "Su Windows, l'argomento '-t' attiva il ping indefinito. Si interrompe digitando la combinazione di tasti Ctrl+C."
        },
        {
            question: "Quale livello del modello di riferimento TCP/IP raggruppa le funzionalità dei livelli Sessione, Presentazione e Applicazione del modello OSI standard?",
            options: ["Network Access (Accesso alla rete)", "Transport (Trasporto)", "Internet", "Application (Applicazione)"],
            correct: 3,
            rationale: "Il modello TCP/IP semplifica la struttura inglobando i tre strati superiori del modello OSI in un unico grande livello applicativo."
        },
        {
            question: "Quale tipo di connettore in plastica viene crimpato all'estremità di un cavo di rete in rame a coppie intrecciate (UTP) per collegarlo a uno switch o a una scheda di rete?",
            options: ["Connettore RJ-11", "Connettore RJ-45", "Connettore BNC", "Connettore ST"],
            correct: 1,
            rationale: "Il connettore RJ-45 a 8 pin è l'interfaccia standard mondiale impiegata per i cablaggi delle reti Ethernet UTP/STP."
        },
        {
            question: "Quale informazione finale viene inserita nel trailer di un pacchetto IP prima che diventi un frame pronto per il livello fisico?",
            options: ["L'indirizzo IP del Gateway", "Il valore di controllo dell'integrità dei dati (FCS)", "Il numero di porta sorgente", "Il flag di controllo del flusso"],
            correct: 1,
            rationale: "L'FCS (Frame Check Sequence) viene inserito alla fine del frame (trailer) e contiene il codice di controllo d'errore calcolato sull'intera PDU."
        }          
        ];
