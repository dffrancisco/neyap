
import { reactive } from 'vue'

const state = reactive({
    idVendedor: 1,
    inboxId: 7,
    mensagemChatwoot: {
        "data": {
            "conversation": {
                "contact_inbox": {
                    "id": 1369,
                    "contact_id": 1345,
                    "inbox_id": 8,
                    "source_id": "7d77763d-84db-451a-9778-8e0aff3ea4b4",
                    "created_at": "2025-01-25T16:29:30.045Z",
                    "updated_at": "2025-01-25T16:29:30.045Z",
                    "hmac_verified": false,
                    "pubsub_token": "Di9Q2dftmwZ5JCeDJcgqnPY7"
                },
            },
            "contact": {
                "id": 1345,
                "identifier": "556285505263@s.whatsapp.net",
                "name": "JF Camisaria",
                "phone_number": "+556285505263",
                "thumbnail": "https://chat.neyap.com.br/rails/active_storage/representations/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBcDRpIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--98203d37e79cfe3a861264628227e8d4b684c926/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdCem9MWm05eWJXRjBTU0lJYW5CbkJqb0dSVlE2RTNKbGMybDZaVjkwYjE5bWFXeHNXd2RwQWZvdyIsImV4cCI6bnVsbCwicHVyIjoidmFyaWF0aW9uIn19--926269986e81f4cab1e3c376b66175aec0c50bbd/439105377_444886438179047_8628997034290029149_n.jpg",
                "type": "contact",
                "account_id": 1,
            },
            "currentAgent": {
                "id": 1,
                "name": "Francisco Alves",
                "email": "dffrancisco@gmail.com"
            }
        }
    }
});

export default state
