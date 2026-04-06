import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MapPin, User, Recycle, Star, Clock, ArrowLeft } from "lucide-react";

export default function AppPrototype() {
    const [screen, setScreen] = useState("login");

    const PhoneFrame = ({ children }) => (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
            <div className="w-[360px] h-[720px] bg-white rounded-[2.5rem] shadow-2xl border overflow-hidden flex flex-col">
                {children}
            </div>
        </div>
    );

    const Header = ({ title, showBack = true }) => (
        <div className="flex items-center gap-3 px-4 py-3 border-b">
            {showBack && (
                <button onClick={() => setScreen("home")}>
                    <ArrowLeft size={20} />
                </button>
            )}
            <h1 className="text-lg font-semibold">{title}</h1>
        </div>
    );

    const Container = ({ children }) => (
        <div className="flex-1 overflow-y-auto p-4 space-y-4">{children}</div>
    );

    const renderScreen = () => {
        switch (screen) {
            case "login":
                return (
                    <Container>
                        <div className="flex flex-col justify-center h-full gap-4">
                            <h1 className="text-3xl font-bold text-center">3RMatch</h1>
                            <p className="text-center text-sm text-gray-500">Conectando quem recicla</p>

                            <Button className="w-full rounded-xl bg-white text-black border flex items-center justify-center gap-2" onClick={() => setScreen("home")}>
                                <img src="https://www.svgrepo.com/show/475656/google-color.svg" className="w-5 h-5" alt="google" />
                                Google
                            </Button>

                            <Button className="w-full rounded-xl bg-blue-600 text-white flex items-center justify-center gap-2" onClick={() => setScreen("home")}>
                                <img src="https://www.svgrepo.com/show/475647/facebook-color.svg" className="w-5 h-5" alt="facebook" />
                                Facebook
                            </Button>

                            <Button className="w-full rounded-xl bg-black text-white flex items-center justify-center gap-2" onClick={() => setScreen("home")}>
                                <img src="https://www.svgrepo.com/show/475689/apple-color.svg" className="w-5 h-5" alt="apple" />
                                Apple
                            </Button>

                            <div className="flex items-center gap-2">
                                <div className="flex-1 h-px bg-gray-200" />
                                <span className="text-xs text-gray-400">ou</span>
                                <div className="flex-1 h-px bg-gray-200" />
                            </div>

                            <Input placeholder="Email" />
                            <Input placeholder="Senha" type="password" />
                            <Button className="w-full rounded-xl" onClick={() => setScreen("home")}>Entrar</Button>
                        </div>
                    </Container>
                );

            case "home":
                return (
                    <Container>
                        <h2 className="text-lg font-semibold">Menu</h2>
                        <div className="grid grid-cols-2 gap-3">
                            {[
                                { label: "Usuarios", action: "cadastroUsuario", icon: <User size={18} /> },
                                { label: "Materiais", action: "materiais", icon: <Recycle size={18} /> },
                                { label: "Mapa", action: "mapa", icon: <MapPin size={18} /> },
                                { label: "Match", action: "match", icon: <Star size={18} /> },
                                { label: "Historico", action: "historico", icon: <Clock size={18} /> }
                            ].map((item, i) => (
                                <Card key={i} className="p-4 rounded-2xl cursor-pointer hover:shadow-md" onClick={() => setScreen(item.action)}>
                                    <CardContent className="flex flex-col items-center gap-2">
                                        <div className="p-3 bg-gray-100 rounded-xl">{item.icon}</div>
                                        <span className="text-sm font-medium">{item.label}</span>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </Container>
                );

            case "cadastroUsuario":
                return (
                    <>
                        <Header title="Usuario" />
                        <Container>
                            <Card className="p-4 space-y-4 rounded-2xl">

                                <div>
                                    <p className="text-sm font-medium mb-2">Tipo de usuario</p>
                                    <select className="w-full border rounded-xl p-2">
                                        <option>Usuario</option>
                                        <option>Coletor</option>
                                    </select>
                                </div>

                                <Input placeholder="Nome completo" />
                                <Input placeholder="Endereco" />
                                <Input placeholder="Telefone" />

                                <Button className="w-full rounded-xl">Salvar</Button>

                                <div className="pt-4 border-t space-y-2">
                                    <p className="text-xs text-gray-500">Autenticado via</p>
                                    <label className="flex items-center gap-2 text-sm">
                                        <input type="checkbox" checked disabled /> Google
                                    </label>
                                    <label className="flex items-center gap-2 text-sm">
                                        <input type="checkbox" disabled /> Facebook
                                    </label>
                                    <label className="flex items-center gap-2 text-sm">
                                        <input type="checkbox" disabled /> Apple
                                    </label>
                                </div>
                            </Card>
                        </Container>
                    </>
                );

            case "materiais":
                return (
                    <>
                        <Header title="Material" />
                        <Container>
                            <Card className="p-4 space-y-4 rounded-2xl">
                                <Input placeholder="Tipo" />
                                <Input placeholder="Quantidade" />
                                <Button className="w-full rounded-xl">Cadastrar</Button>
                            </Card>

                            <div className="space-y-2">
                                <h3 className="text-sm font-semibold text-gray-600">Materiais cadastrados</h3>
                                {["Plastico", "Papel", "Vidro", "Metal"].map((item, i) => (
                                    <Card key={i} className="p-3 rounded-2xl flex justify-between items-center">
                                        <span className="text-sm">{item}</span>
                                        <span className="text-xs text-gray-400">Disponivel</span>
                                    </Card>
                                ))}
                            </div>
                        </Container>
                    </>
                );

            case "mapa":
                return (
                    <>
                        <Header title="Mapa" />
                        <Container>
                            <div className="space-y-3">
                                <h3 className="text-sm font-semibold text-gray-600">Coletores proximos</h3>

                                {[
                                    { nome: "Joao Recicla", distancia: "2km" },
                                    { nome: "EcoColeta", distancia: "3km" },
                                    { nome: "Verde Vida", distancia: "1.5km" }
                                ].map((item, i) => (
                                    <Card
                                        key={i}
                                        className="p-3 rounded-2xl flex justify-between items-center cursor-pointer hover:bg-gray-50"
                                        onClick={() => {
                                            const confirmar = confirm(
                                                `Solicitar coleta com ${item.nome}?`
                                            );
                                            if (confirmar) {
                                                alert("Solicitacao enviada com sucesso");
                                            }
                                        }}
                                    >
                                        <div>
                                            <p className="font-medium text-sm">{item.nome}</p>
                                            <p className="text-xs text-gray-500">Distancia: {item.distancia}</p>
                                        </div>
                                        <span className="text-xs text-green-600">Disponivel</span>
                                    </Card>
                                ))}
                            </div>

                            <Card className="p-6 text-center text-gray-400 rounded-2xl">
                                <MapPin className="mx-auto mb-2" />
                                <div className="relative">
                                    <img src="https://maps.googleapis.com/maps/api/staticmap?center=Sao+Carlos+SP&zoom=13&size=300x200&markers=color:green|Sao+Carlos+SP&markers=color:blue|Sao+Carlos+SP&markers=color:red|Sao+Carlos+SP" className="rounded-xl w-full" alt="mapa" />
                                    <div className="absolute top-2 left-2 bg-white px-2 py-1 rounded text-xs shadow">3 coletores proximos</div>
                                </div>
                            </Card>
                        </Container>
                    </>
                );

            case "match":
                return (
                    <>
                        <Header title="Match" />
                        <Container>
                            <Card className="p-4 space-y-4 rounded-2xl">
                                <div className="p-3 border rounded-xl">
                                    <p className="font-semibold">Joao Recicla</p>
                                    <p className="text-xs text-gray-500">2km - Plastico</p>
                                </div>
                                <Button className="w-full rounded-xl">Confirmar</Button>
                            </Card>
                        </Container>
                    </>
                );

            case "historico":
                return (
                    <>
                        <Header title="Historico" />
                        <Container>
                            <div className="space-y-2">
                                {[1, 2, 3].map((i) => (
                                    <Card key={i} className="p-3 rounded-2xl">
                                        <p className="font-medium text-sm">Coleta realizada</p>
                                        <p className="text-xs text-gray-500">Plastico - 5kg</p>
                                    </Card>
                                ))}
                            </div>
                        </Container>
                    </>
                );

            default:
                return null;
        }
    };

    return <PhoneFrame>{renderScreen()}</PhoneFrame>;
}
