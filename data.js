
const ccnaDatabase = {
    ccna1: [
        // Le inseriremo nel prossimo step
    ],
    ccna2: [
        {
            question: "Un amministratore di rete sta configurando un collegamento EtherChannel tra lo switch SW1 e lo switch SW2. Quale comando avvia la negoziazione LACP solo se rileva un dispositivo LACP remoto?",
            options: [
                "SW1(config-if-range)# channel-group 1 mode active",
                "SW1(config-if-range)# channel-group 1 mode auto",
                "SW1(config-if-range)# channel-group 1 mode desirable",
                "SW1(config-if-range)# channel-group 1 mode passive"
            ],
            correct: 3,
            rationale: "La modalità 'passive' risponde alle richieste LACP ma non avvia la negoziazione. La modalità 'active' invece avvia attivamente la negoziazione."
        },
        {
            question: "Quale comando configurerà una rotta statica di default IPv6?",
            options: [
                "ipv6 route ::/0 serial 0/0/0",
                "ipv6 route ::/128 serial 0/0/0",
                "ip route 0.0.0.0 0.0.0.0 serial 0/0/0",
                "ipv6 route 2001:db8:acad::/64 serial 0/0/0"
            ],
            correct: 0,
            rationale: "La rotta di default in IPv6 è rappresentata dal prefisso ::/0."
        },
        {
            question: "Quale tipologia di attacco wireless ha l'obiettivo di saturare lo spettro RF impedendo ai client legittimi di connettersi?",
            options: [
                "Man-in-the-middle",
                "Jamming",
                "Rogue Access Point",
                "Evil Twin"
            ],
            correct: 1,
            rationale: "Il Jamming (interferenza intenzionale) bombarda le frequenze wireless per causare un Denial of Service (DoS) a livello fisico."
        },
        {
            question: "Un ingegnere di rete inserisce il comando 'ip helper-address 10.1.1.5' sull'interfaccia G0/0 di un router. Quale problema sta risolvendo?",
            options: [
                "L'inoltro dei messaggi DHCPv4 broadcast dei client verso un server DHCP situato in un'altra sottorete.",
                "La sincronizzazione del tempo tramite server NTP.",
                "Il blocco del traffico web non autorizzato.",
                "La traduzione degli indirizzi NAT dinamici."
            ],
            correct: 0,
            rationale: "Il comando ip helper-address abilita il DHCP Relay, trasformando i broadcast DHCP dei client in pacchetti unicast diretti al server."
        },
        {
            question: "Che cosa succede se la configurazione dei timer Hello e Dead differisce tra due router OSPFv2 connessi direttamente?",
            options: [
                "I router scambiano le tabelle ma non installano le rotte.",
                "Non si stabilisce l'adiacenza di vicinato (neighbor adjacency).",
                "OSPFv2 seleziona automaticamente il timer più basso.",
                "La rete converge più lentamente ma funziona."
            ],
            correct: 1,
            rationale: "I timer Hello e Dead intervallati devono coincidere perfettamente nei pacchetti Hello affinché l'adiacenza OSPF vada a buon fine."
        },
        {
            question: "Quale funzionalità dello switch Layer 2 previene la manipolazione del traffico DHCP bloccando i messaggi DHCP offer non validi provenienti da porte non autorizzate?",
            options: [
                "Port Security",
                "Dynamic ARP Inspection (DAI)",
                "DHCP Snooping",
                "BPDU Guard"
            ],
            correct: 2,
            rationale: "Il DHCP Snooping distingue le porte in fidate (trusted) e non fidate (untrusted), scartando i messaggi DHCP server provenienti da porte untrusted."
        },
        {
            question: "Quale delle seguenti opzioni descrive accuratamente il comportamento del routing statico flottante (Floating Static Route)?",
            options: [
                "Ha una distanza amministrativa inferiore rispetto al protocollo di routing dinamico principale.",
                "Viene inserita immediatamente nella tabella di routing insieme alla rotta principale per fare load balancing.",
                "Utilizza una distanza amministrativa più elevata della rotta principale ed entra in funzione solo se quest'ultima fallisce.",
                "Modifica dinamicamente la metrica in base al ritardo della linea."
            ],
            correct: 2,
            rationale: "Le rotte flottanti fungono da backup; configurando una AD più alta (es. 90 o 120), rimangono nascoste finché la rotta primaria con AD inferiore è attiva."
        },
        {
            question: "Quale protocollo standard viene utilizzato per aggregare più link fisici in un unico canale logico EtherChannel senza vincolarsi a hardware proprietario Cisco?",
            options: [
                "PAgP",
                "LACP",
                "DTP",
                "VTP"
            ],
            correct: 1,
            rationale: "LACP (Link Aggregation Control Protocol) è lo standard IEEE 802.3ad, mentre PAgP è proprietario di Cisco."
        },
        {
            question: "Durante il processo di elezione del Designated Router (DR) in una rete OSPF multi-accesso, quale parametro viene valutato come prima scelta dal router?",
            options: [
                "L'indirizzo IP più alto sull'interfaccia di loopback.",
                "La priorità dell'interfaccia (Interface Priority).",
                "Il MAC address dello switch core.",
                "Il valore della metrica verso la rotta di default."
            ],
            correct: 1,
            rationale: "OSPF seleziona il DR basandosi sulla priorità dell'interfaccia (di default 1). In caso di pareggio, si valuta il Router ID più alto."
        },
        {
            question: "In una configurazione NAT Outside Source, cosa indica il termine 'Inside Global'?",
            options: [
                "L'indirizzo IP privato assegnato a un host all'interno della LAN.",
                "L'indirizzo IP pubblico visibile su Internet che rappresenta uno o più host interni.",
                "L'indirizzo IP configurato sull'interfaccia del provider (ISP).",
                "L'indirizzo IPv6 di tipo Link-Local del router."
            ],
            correct: 1,
            rationale: "L'indirizzo Inside Global è l'indirizzo pubblico registrato visto dal mondo esterno per identificare i dispositivi interni all'azienda."
        }
    ],
    ccna3: [
        // Le inseriremo più avanti
    ]
};
